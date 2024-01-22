"use client";

import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";

function Sidebar() {
  const { theme, option, setOption } = useContext(AppContext);

  const SidebarItems: Array<Object> = [
    {
      title: "Notes",
      icon: <div />,
    },
    {
      title: "Reminders",
      icon: "</>",
    },
    {
      title: "Edit labels",
      icon: "</>",
    },
    {
      title: "Archive",
      icon: "</>",
    },
    {
      title: "Bin",
      icon: "</>",
    },
  ];

  return (
    <div className="">
      <div className="flex flex-col w-[280px] h-full gap-1 justify-start items-start">
        {SidebarItems.map((set) => (
          <button
            key={set?.title}
            className="w-full"
            onClick={() => {
              setOption(set.title);
            }}
          >
            <div
              className={
                ` flex justify-start pl-8 items-center gap-8 py-3 rounded-r-full hover:bg-red-100 ` +
                (option === set.title ? "border-2 border-white" : "")
              }
            >
              <div>{set.icon}</div>
              <p className="text-[15px]">{set?.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
