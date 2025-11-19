// src/stores/OperationStore.ts
import { makeAutoObservable } from "mobx";
import type { RootStore } from "./RootStore";

export type SlotPosition = "HOME_MAIN" | "GAME_END";

export type SlotType = "TASK_ENTRY" | "SIGN_ENTRY" | "ACTIVITY_BANNER";

export interface SlotConfig {
  id: string;
  slot: SlotPosition;
  type: SlotType;
  title: string;
  enabled: boolean;
}

export class OperationStore {
  rootStore: RootStore;
  slots: SlotConfig[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);

    // 模拟后端返回配置
    this.slots = [
      {
        id: "s1",
        slot: "HOME_MAIN",
        type: "TASK_ENTRY",
        title: "今日任务",
        enabled: true,
      },
      {
        id: "s2",
        slot: "HOME_MAIN",
        type: "SIGN_ENTRY",
        title: "七日签到",
        enabled: true,
      },
    ];
  }

  getHomeSlots() {
    return this.slots.filter((s) => s.slot === "HOME_MAIN" && s.enabled);
  }
}
