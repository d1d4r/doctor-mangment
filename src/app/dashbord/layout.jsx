import Sidebar from "@/components/Sidebar";
import React from "react";

const HomeLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 md:h-full md:grid-cols-7 ">
      <div className=" bg-slate-100">
        <Sidebar />
      </div>
      <div className="md:col-end-8 md:col-start-2 bg-slate-500">{children}</div>
    </div>
  );
};

export default HomeLayout;
