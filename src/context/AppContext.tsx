"use client";

import React, { createContext, ReactNode, useState } from "react";

interface AppContextProps {
  theme: string;
  toggleTheme: () => void;
}

export const AppContext = createContext<AppContextProps | null>(null);

interface AppProps {
  children: ReactNode;
}

export const App: React.FC<AppProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue: AppContextProps = {
    theme,
    toggleTheme,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
