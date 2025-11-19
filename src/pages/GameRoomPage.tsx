// src/pages/GameRoomPage.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../context/storeContext";

export const GameRoomPage: React.FC = observer(() => {
  const { taskStore } = useStore();

  const handleEndGame = (win: boolean) => {
    // 模拟一局结束，上报给任务系统
    taskStore.onGameEnd({ win });
  };

  return (
    <div>
      <h1 className="text-xl mb-4">对局页（模拟）</h1>
      <p className="text-sm mb-4 text-slate-300">
        这里正常会是斗地主的对局画面，现在先用按钮模拟对局结果。
      </p>
      <div className="flex gap-3">
        <button
          className="flex-1 py-2 rounded bg-emerald-500"
          onClick={() => handleEndGame(true)}
        >
          结算（胜利）
        </button>
        <button
          className="flex-1 py-2 rounded bg-slate-700"
          onClick={() => handleEndGame(false)}
        >
          结算（失败）
        </button>
      </div>
    </div>
  );
});
