import React, { createContext, useContext } from "react";

const StoreCtx = createContext();
export const useStore = () => useContext(StoreCtx);

const StoreProvider = ({ children }) => (
  <StoreCtx.Provider> {children}</StoreCtx.Provider>
);

export default StoreProvider;
