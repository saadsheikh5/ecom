import React from "react";
import Sidebar from "./Sidebar";

const Favorites = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-5">
        <h1>you dont have any favorites,add now!</h1>
      </div>
    </div>
  );
};

export default Favorites;
