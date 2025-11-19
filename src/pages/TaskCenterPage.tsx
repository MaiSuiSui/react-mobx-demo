// src/pages/TaskCenterPage.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../context/storeContext";

export const TaskCenterPage: React.FC = observer(() => {
  const { taskStore } = useStore();

  return (
    <div>
      <h1 className="text-xl mb-4">任务中心</h1>
      <div className="space-y-3">
        {taskStore.tasks.map((t) => (
          <div
            key={t.id}
            className="bg-slate-800 rounded-xl p-3 text-sm flex justify-between items-center"
          >
            <div>
              <div>{t.title}</div>
              <div className="text-xs text-slate-400">
                进度：{t.progress}/{t.target}（{t.status}）
              </div>
            </div>
            {t.status === "CAN_CLAIM" && (
              <button
                className="text-xs px-2 py-1 rounded bg-yellow-400 text-slate-900"
                onClick={() => taskStore.claimReward(t.id)}
              >
                领取
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
});
