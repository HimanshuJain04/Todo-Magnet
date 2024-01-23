"use client";

import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { SlMagnifier } from "react-icons/sl";
import { IoIosRefresh } from "react-icons/io";
import { TfiViewGrid } from "react-icons/tfi";
import { BsViewStacked } from "react-icons/bs";
import { TbGridDots } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { FaRegMoon } from "react-icons/fa";

function Navbar() {
  const { theme, toggleTheme } = useContext(AppContext);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className={
        `flex w-full justify-center border-b-2 items-center ` +
        (theme === "dark"
          ? "border-dark-border bg-dark-primary "
          : "border-light-border bg-light-primary")
      }
    >
      <div className="w-11/12 flex justify-between items-center py-3 gap-10">
        {/* left for search-bar and name and hamburger */}
        <div className="flex gap-20">
          <div
            className={
              `flex justify-center gap-5 items-center ` +
              (theme === "dark" ? "text-dark-text" : "text-light-text")
            }
          >
            {/* hamburger */}
            <div
              className={
                `text-2xl cursor-pointer rounded-full  p-3 transition-all ease-in-out duration-300 ` +
                (theme === "dark"
                  ? "hover:bg-dark-secondary text-dark-text"
                  : "hover:bg-light-secondary text-light-text")
              }
            >
              <IoMdMenu />
            </div>

            {/* name of app */}
            <div>
              <p
                className={
                  `text-xl transition-all duration-300 ease-in-out font-semibold ` +
                  (theme === "dark" ? "text-dark-text" : "text-light-text")
                }
              >
                Todo Magnet
              </p>
            </div>
          </div>

          {/* search-bar */}
          <div
            className={
              `flex justify-center items-center gap-1 rounded-md px-5 py-1 ` +
              (theme === "dark" ? "bg-dark-secondary" : "bg-light-secondary")
            }
          >
            <div
              className={
                ` cursor-pointer text-xl font-bold ` +
                (theme === "dark" ? "text-dark-text" : "text-light-text")
              }
            >
              <SlMagnifier fontWeight="900" />
            </div>
            <input
              type="text"
              className={`outline-none font-semibold px-3 w-[600px] py-2 bg-transparent text-${theme}-text`}
              placeholder="Search"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
          </div>
        </div>

        {/* right for account and settings */}
        <div className="flex justify-center items-center gap-10">
          {/* settings */}
          <div
            className={`flex justify-center text-${theme}-text  items-center gap-2 text-2xl transition-all duration-300 ease-in-out`}
          >
            {/* theme toggle button */}
            <div>
              <button
                onClick={toggleTheme}
                className={
                  `text-2xl rounded-full p-3 cursor-pointer ` +
                  (theme === "dark"
                    ? "text-dark-text hover:bg-dark-secondary"
                    : "text-light-text hover:bg-light-secondary ")
                }
              >
                {theme === "dark" ? <FiSun /> : <FaRegMoon />}
              </button>
            </div>
            {/* refresh */}
            <div
              className={` hover:bg-${theme}-secondary rounded-full transition-all duration-300 ease-in-out p-2 cursor-pointer `}
            >
              <IoIosRefresh />
            </div>

            {/* view setting */}
            <div
              className={` hover:bg-${theme}-secondary  rounded-full transition-all duration-300 ease-in-out p-2 cursor-pointer `}
            >
              <BsViewStacked />
            </div>

            {/* setting */}
            <div
              className={` hover:bg-${theme}-secondary rounded-full transition-all duration-300 ease-in-out p-2 cursor-pointer `}
            >
              <IoSettings />
            </div>
          </div>

          {/* account and dots */}
          <div className="flex justify-center items-center gap-2 transition-all duration-300 ease-in-out">
            {/* dots */}
            <div
              className={`text-2xl cursor-pointer hover:bg-${theme}-secondary text-${theme}-text p-3 rounded-full`}
            >
              <TbGridDots />
            </div>

            {/* account */}
            <div>
              <div
                className={`w-[50px] flex justify-center items-center transition-all p-1 hover:bg-${theme}-secondary ease-in-out duration-300 h-[50px] rounded-full cursor-pointer overflow-hidden`}
              >
                <span>hi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
