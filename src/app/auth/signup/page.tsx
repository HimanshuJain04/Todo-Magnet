"use client";

import React, { ReactEventHandler, useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import Link from "next/link";

const Signup: React.FC = () => {
  const { theme } = useContext(AppContext);

  const [formValue, setFormValue] = useState({
    userName: "",
    fullName: "",
    avatar: "",
    email: "",
    password: "",
  });

  const changeHandler = (e: any) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  async function signupHandler() {
    try {
    } catch (e) {}
  }

  return (
    <div
      className={`flex justify-center h-[100vh] items-start bg-${theme}-primary`}
    >
      <div
        className={`w-10/12 flex justify-center items-center mt-10  text-xl`}
      >
        <div className="flex flex-col justify-start items-center gap-14">
          {/* heading */}
          <div>
            <p className={` text-4xl font-semibold text-${theme}-text`}>
              Signup
            </p>
          </div>

          {/* div for form */}
          <div className="flex flex-col justify-start gap-5 items-center">
            {/* username */}
            <div
              className={`flex justify-start gap-1 items-start flex-col text-${theme}-text `}
            >
              <label className="" htmlFor="userName">
                UserName
              </label>
              <input
                required
                type="text"
                value={formValue.userName}
                onChange={changeHandler}
                name="userName"
                placeholder="Enter your username"
                id="userName"
                className={`outline-none py-2 w-[350px] px-3 rounded-md bg-${theme}-secondary text-${theme}-text`}
              />
            </div>

            {/* fullname */}
            <div
              className={`flex justify-start gap-1 items-start flex-col text-${theme}-text `}
            >
              <label className="" htmlFor="fullName">
                FullName
              </label>
              <input
                required
                type="text"
                value={formValue.fullName}
                onChange={changeHandler}
                name="fullName"
                placeholder="Enter your fullname"
                id="fullName"
                className={`outline-none py-2 w-[350px] px-3 rounded-md bg-${theme}-secondary text-${theme}-text`}
              />
            </div>

            {/* email */}
            <div
              className={`flex justify-start gap-1 items-start flex-col text-${theme}-text `}
            >
              <label className="" htmlFor="email">
                Email
              </label>
              <input
                required
                type="email"
                value={formValue.email}
                onChange={changeHandler}
                name="email"
                placeholder="Enter your email"
                id="email"
                className={`outline-none py-2 w-[350px] px-3 rounded-md bg-${theme}-secondary text-${theme}-text`}
              />
            </div>

            {/* password */}
            <div
              className={`flex justify-start gap-1 items-start flex-col text-${theme}-text `}
            >
              <label className="" htmlFor="password">
                Password
              </label>
              <input
                required
                type="password"
                value={formValue.password}
                onChange={changeHandler}
                name="password"
                placeholder="Enter your password"
                id="password"
                className={`outline-none py-2 w-[350px] px-3 rounded-md bg-${theme}-secondary text-${theme}-text`}
              />
            </div>

            {/* button */}
            <div>
              <button
                onClick={signupHandler}
                className={`text-${theme}-text mt-8 hover:bg-${theme}-primary border-2 border-${theme}-border
                px-10 font-semibold bg-${theme}-secondary hover:border-${theme}-text py-3 rounded-md
                 transition-all duration-300 ease-in-out`}
              >
                Signup
              </button>
            </div>

            {/* for login */}
            <div className="w-full flex mt-2 justify-start gap-5 items-center flex-col">
              <div className="flex text-sm justify-center gap-1 items-center w-full">
                <div className={`w-full h-[2px] bg-${theme}-secondary`}></div>
                <p>OR</p>
                <div className={`w-full h-[2px] bg-${theme}-secondary`}></div>
              </div>
              <div>
                <Link
                  href="/auth/login"
                  className={` text-${theme}-accent hover:underline font-semibold text-[17px] `}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
