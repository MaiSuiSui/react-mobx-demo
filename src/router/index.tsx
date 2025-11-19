// src/router/index.tsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GameRoomPage } from "../pages/GameRoomPage";
import { TaskCenterPage } from "../pages/TaskCenterPage";
import { Layout } from "../components/layout/Layout";

export const AppRouter: React.FC = () => {
  return (
    <Layout>
      <Routes>
        {/* 默认跳到大厅页 */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/game" element={<GameRoomPage />} />
        <Route path="/tasks" element={<TaskCenterPage />} />
        {/* 兜底：未知路由也回到大厅 */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Layout>
  );
};
