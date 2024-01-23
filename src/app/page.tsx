"use client";

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function Home() {
  const { theme } = useContext(AppContext);

  return <div className={`bg-${theme}-primary `}>hii</div>;
}
