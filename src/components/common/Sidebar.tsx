"use client";

import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";

function Sidebar() {
  const { theme } = useContext(AppContext);

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
      <div className="flex flex-col w-[280px] h-full gap-2 justify-start items-start">
        {SidebarItems.map((set) => (
          <div key={set?.title} className="w-full">
            <div
              className={` flex justify-start pl-8 items-center gap-8 py-3 rounded-r-full hover:bg-red-100`}
            >
              <div>{set.icon}</div>
              <p className="text-[15px]">{set?.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
