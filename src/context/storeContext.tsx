// src/context/storeContext.tsx
import React, { createContext, useContext } from "react";
import type { RootStoreType } from "../stores";

const StoreContext = createContext<RootStoreType | null>(null);

interface StoreProviderProps {
  store: RootStoreType;
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ store, children }) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return ctx;
};
