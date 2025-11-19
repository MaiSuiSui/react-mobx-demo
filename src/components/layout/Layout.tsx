// src/components/layout/Layout.tsx
import React from "react";
import { NavBar } from "../common/NavBar";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-slate-900">
      <NavBar />
      <main className="p-4">{children}</main>
    </div>
  );
};
