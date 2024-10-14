import React from "react";
import Sidebar from "./Sidebar";

const AccountInfo = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className=" bg-white p-4 ">
        <h2 className="text-xl font-semibold mb-4">Account Info</h2>
      </div>
    </div>
  );
};

export default AccountInfo;
