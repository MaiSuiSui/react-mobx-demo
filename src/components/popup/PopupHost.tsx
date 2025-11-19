// src/components/popup/PopupHost.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../context/storeContext";
import { TaskRewardDialog } from "./TaskRewardDialog";

export const PopupHost: React.FC = observer(() => {
  const { popupStore } = useStore();
  const popup = popupStore.current;

  if (!popup) return null;

  if (popup.type === "TASK_REWARD") {
    return (
      <TaskRewardDialog
        task={popup.payload.task}
        onClose={() => popupStore.closeCurrent()}
      />
    );
  }

  // 其他类型弹窗后面再加
  return null;
});
