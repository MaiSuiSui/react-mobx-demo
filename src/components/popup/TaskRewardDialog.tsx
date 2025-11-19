// src/components/popup/TaskRewardDialog.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../context/storeContext";
import type { Task } from "../../stores/TaskStore";

interface Props {
  task: Task;
  onClose: () => void;
}

export const TaskRewardDialog: React.FC<Props> = observer(
  ({ task, onClose }) => {
    const { taskStore } = useStore();

    const handleClaim = () => {
      taskStore.claimReward(task.id);
      onClose();
    };

    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-slate-800 rounded-xl p-4 w-72">
          <h3 className="text-lg mb-2">任务完成</h3>
          <p className="text-sm mb-4">{task.title}</p>
          <button
            className="w-full py-2 rounded bg-yellow-400 text-slate-900 font-semibold"
            onClick={handleClaim}
          >
            领取奖励（+100 金币）
          </button>
        </div>
      </div>
    );
  }
);
