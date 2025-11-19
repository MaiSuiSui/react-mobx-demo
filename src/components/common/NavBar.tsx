// src/components/common/NavBar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useStore } from "../../context/storeContext";

export const NavBar: React.FC = observer(() => {
  const { pathname } = useLocation();
  const { userStore, taskStore } = useStore();

  return (
    <header className="flex items-center justify-between px-4 py-2 bg-slate-800">
      <div className="text-sm">
        <div>{userStore.nickname}</div>
        <div className="text-xs text-slate-300">金币：{userStore.gold}</div>
      </div>
      <nav className="flex gap-3 text-xs">
        <Link
          to="/home"
          className={pathname === "/home" ? "font-bold" : ""}
        >
          大厅
        </Link>
        <Link
          to="/game"
          className={pathname === "/game" ? "font-bold" : ""}
        >
          对局
        </Link>
        <Link
          to="/tasks"
          className={pathname === "/tasks" ? "font-bold" : ""}
        >
          任务
          {taskStore.pendingRewards.length > 0 && (
            <span className="ml-1 inline-block w-2 h-2 bg-red-500 rounded-full" />
          )}
        </Link>
      </nav>
    </header>
  );
});
