"use client";

import React, { createContext, ReactNode, useState } from "react";

interface AppContextProps {
  theme: string;
  toggleTheme: () => void;
  option: string;
}

export const AppContext = createContext<AppContextProps | null>(null);

interface AppProps {
  children: ReactNode;
}

export const App: React.FC<AppProps> = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [option, setOption] = useState("Notes");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const contextValue: AppContextProps = {
    theme,
    toggleTheme,
    option,
    setOption,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
