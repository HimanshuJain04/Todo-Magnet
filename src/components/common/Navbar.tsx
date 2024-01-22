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

function Navbar() {
  const { theme, toggleTheme } = useContext(AppContext);
  console.log(theme);

  const [searchValue, setSearchValue] = useState("");

  return (
    <div
      className={
        `flex w-full justify-center border-b-2 border-${theme}-border items-center  bg-${theme}-primary ` +
        ``
      }
    >
      <div className="w-11/12 flex justify-between items-center py-3 gap-10">
        {/* left for search-bar and name and hamburger */}
        <div className="flex gap-20">
          <div
            className={`flex justify-center gap-5 items-center text-{theme}-text`}
          >
            {/* hamburger */}
            <div
              className={`text-2xl cursor-pointer rounded-full  p-3 hover:bg-${theme}-secondary transition-all ease-in-out duration-300 text-${theme}-text`}
            >
              <IoMdMenu />
            </div>

            {/* name of app */}
            <div>
              <p
                className={`text-xl transition-all duration-300 ease-in-out font-semibold text-${theme}-text `}
              >
                Todo Magnet
              </p>
            </div>
          </div>

          {/* search-bar */}
          <div
            className={`flex justify-center items-center gap-1 rounded-md bg-[#383636] px-5 py-1 bg-${theme}-secondary`}
          >
            <div className={` cursor-pointer font-bold text-${theme}-text`}>
              <SlMagnifier />
            </div>
            <input
              type="text"
              className="outline-none px-3 w-[600px] py-2 bg-transparent"
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
          <div className="flex justify-center items-center gap-2 text-2xl transition-all duration-300 ease-in-out">
            {/* refresh */}
            <div
              className={` hover:bg-${theme}-secondary rounded-full transition-all duration-300 ease-in-out p-2 cursor-pointer `}
            >
              <IoIosRefresh />
            </div>

            {/* view setting */}
            <div
              className={` hover:bg-${theme}-secondary rounded-full transition-all duration-300 ease-in-out p-2 cursor-pointer `}
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
              className={`text-2xl cursor-pointer hover:bg-${theme}-secondary p-3 rounded-full`}
            >
              <TbGridDots />
            </div>

            {/* account */}
            <div>
              <div className="w-[50px] h-[50px] rounded-full bg-red-200 cursor-pointer overflow-hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
