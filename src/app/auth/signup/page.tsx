"use client";

import React, { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const Signup: React.FC = () => {
  const { theme } = useContext(AppContext);

  return (
    <div className="flex justify-center items-center">
      <div className="w-10/12 flex justify-start items-center text-white tex-xl">
        signup
      </div>
    </div>
  );
};

export default Signup;
