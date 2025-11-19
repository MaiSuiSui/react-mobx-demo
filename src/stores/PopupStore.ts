// src/stores/PopupStore.ts
import { makeAutoObservable } from "mobx";
import type { RootStore } from "./RootStore";

export type PopupType = "TASK_REWARD" | "ACTIVITY_ENTRY";

export interface Popup {
  id: string;
  type: PopupType;
  payload?: any;
  priority: number;
}

export class PopupStore {
  rootStore: RootStore;
  queue: Popup[] = [];
  current: Popup | null = null;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  enqueue(p: Popup) {
    this.queue.push(p);
    this.queue.sort((a, b) => b.priority - a.priority);
    this.tryShowNext();
  }

  private tryShowNext() {
    if (this.current) return;
    this.current = this.queue.shift() || null;
  }

  closeCurrent() {
    this.current = null;
    this.tryShowNext();
  }
}
