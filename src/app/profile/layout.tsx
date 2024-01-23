// components/Layout.js
import React from "react";
import Navbar from "@/components/common/Navbar";
import Sidebar from "@/components/common/Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className="fixed top-0 w-full">
          <Navbar />
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className={`w-full h-full `}>
          <div className="flex w-full justify-end items-start">
            <div className="fixed left-0 mt-20">
              <Sidebar />
            </div>
            <div className="w-[calc(100vw-300px)] mt-24">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
