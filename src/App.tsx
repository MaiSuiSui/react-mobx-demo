// src/App.tsx
import React from "react";
import { AppRouter } from "./router";
import { PopupHost } from "./components/popup/PopupHost";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50">
      {/* 全局弹窗挂在这里 */}
      <PopupHost />
      {/* 主路由区域 */}
      <AppRouter />
    </div>
  );
};

export default App;
