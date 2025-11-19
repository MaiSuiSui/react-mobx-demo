// src/pages/HomePage.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../context/storeContext";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = observer(() => {
  const { operationStore } = useStore();
  const navigate = useNavigate();

  const slots = operationStore.getHomeSlots();

  const handleClickSlot = (type: string) => {
    if (type === "TASK_ENTRY") navigate("/tasks");
    // SIGN_ENTRY / ACTIVITY_BANNER 后续再补
  };

  return (
    <div>
      <h1 className="text-xl mb-4">斗地主大厅（运营模块 Demo）</h1>
      <div className="grid grid-cols-2 gap-3">
        {slots.map((s) => (
          <button
            key={s.id}
            className="bg-slate-800 rounded-xl p-3 text-left text-sm"
            onClick={() => handleClickSlot(s.type)}
          >
            {s.title}
          </button>
        ))}
      </div>
    </div>
  );
});
