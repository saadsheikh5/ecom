import React from "react";
import Sidebar from "./Sidebar";

const Orders = () => {
  return (
    <div className=" flex">
      <Sidebar />
      <div className="p-9 font-bold">No Orders Available</div>
    </div>
  );
};

export default Orders;
