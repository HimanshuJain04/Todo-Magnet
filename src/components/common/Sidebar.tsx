"use client";

import { AppContext } from "@/context/AppContext";
import React, { useContext } from "react";

import { MdLightbulbOutline, MdModeEdit } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { IoArchiveOutline } from "react-icons/io5";

function Sidebar() {
  const { theme, option, setOption } = useContext(AppContext);

  const SidebarItems: Array<Object> = [
    {
      title: "Notes",
      icon: <MdLightbulbOutline />,
    },
    {
      title: "Reminders",
      icon: <FaRegBell />,
    },
    {
      title: "Edit labels",
      icon: <MdModeEdit />,
    },
    {
      title: "Archive",
      icon: <IoArchiveOutline />,
    },
    {
      title: "Bin",
      icon: <ImBin />,
    },
  ];

  return (
    <div className="">
      <div
        className={`flex flex-col py-5 text-${theme}-text px-2 w-[280px] h-[calc(1000vh-100px)] gap-1 justify-start items-start bg-${theme}-primary `}
      >
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
                ` flex justify-start pl-8 font-semibold border-2 items-center gap-8 py-3 rounded-r-full hover:bg-${theme}-secondary ` +
                (option === set.title
                  ? ` border-${theme}-light bg-${theme}-accent `
                  : " border-transparent ")
              }
            >
              <div className="text-xl">{set.icon}</div>
              <p className="text-[15px]">{set?.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
