// src/stores/RootStore.ts
import { UserStore } from "./UserStore";
import { TaskStore } from "./TaskStore";
import { PopupStore } from "./PopupStore";
import { OperationStore } from "@/stores/OperationStore";

export class RootStore {
  userStore: UserStore;
  taskStore: TaskStore;
  popupStore: PopupStore;
  operationStore: OperationStore;

  constructor() {
    // 注意传 this，用于跨 store 协作
    this.userStore = new UserStore(this);
    this.taskStore = new TaskStore(this);
    this.popupStore = new PopupStore(this);
    this.operationStore = new OperationStore(this);
  }
}
