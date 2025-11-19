// src/stores/UserStore.ts
import { makeAutoObservable } from "mobx";
import type { RootStore } from "./RootStore";

export class UserStore {
  rootStore: RootStore;
  nickname = "游客";
  gold = 1000;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  setNickname(name: string) {
    this.nickname = name;
  }

  addGold(amount: number) {
    this.gold += amount;
  }

  costGold(amount: number) {
    this.gold = Math.max(0, this.gold - amount);
  }
}
