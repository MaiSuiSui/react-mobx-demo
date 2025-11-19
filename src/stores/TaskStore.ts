// src/stores/TaskStore.ts
import { makeAutoObservable } from "mobx";
import type { RootStore } from "./RootStore";

export type TaskStatus = "DOING" | "CAN_CLAIM" | "DONE";
export type TaskType = "PLAY_TIMES" | "WIN_TIMES";

export interface Task {
  id: string;
  title: string;
  type: TaskType;
  target: number;
  progress: number;
  status: TaskStatus;
}

export interface GameEndResult {
  win: boolean;
}

export class TaskStore {
  rootStore: RootStore;
  tasks: Task[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);

    // 初始化一些默认任务
    this.tasks = [
      {
        id: "t1",
        title: "完成3局对局",
        type: "PLAY_TIMES",
        target: 3,
        progress: 0,
        status: "DOING",
      },
      {
        id: "t2",
        title: "获胜1次",
        type: "WIN_TIMES",
        target: 1,
        progress: 0,
        status: "DOING",
      },
    ];
  }

  get pendingRewards() {
    return this.tasks.filter((t) => t.status === "CAN_CLAIM");
  }

  // 由对局页调用
  onGameEnd(result: GameEndResult) {
    this.tasks.forEach((task) => {
      if (task.status === "DONE") return;

      if (task.type === "PLAY_TIMES") {
        task.progress++;
      }

      if (task.type === "WIN_TIMES" && result.win) {
        task.progress++;
      }

      if (task.progress >= task.target && task.status !== "DONE") {
        task.status = "CAN_CLAIM";

        // 触发一个“任务完成”弹窗
        this.rootStore.popupStore.enqueue({
          id: `TASK_${task.id}`,
          type: "TASK_REWARD",
          payload: { task },
          priority: 10,
        });
      }
    });
  }

  claimReward(taskId: string) {
    const task = this.tasks.find((t) => t.id === taskId);
    if (!task || task.status !== "CAN_CLAIM") return;
    task.status = "DONE";

    // 模拟给用户加金币
    this.rootStore.userStore.addGold(100);
  }
}
