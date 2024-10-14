import React from "react";
import Sidebar from "./Sidebar";

const PaymentDetails = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" p-4 font-bold">
        <button className="">add payment details</button>
      </div>
    </div>
  );
};

export default PaymentDetails;
