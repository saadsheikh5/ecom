import React from "react";
import { Link } from "react-router-dom"; 

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white shadow-lg">
      <Link to="/dashboard">
        <div className="p-4 text-2xl font-bold">My Account</div>
      </Link>
      <nav className="flex-grow mt-4">
        <ul>
          <li className="mb-2">
            <Link
              to="/account-info"
              className="flex items-center p-4 hover:bg-gray-700 rounded transition"
            >
              <span className="material-icons">account_circle</span>
              <span className="ml-2">Account Info</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/favorites"
              className="flex items-center p-4 hover:bg-gray-700 rounded transition"
            >
              <span className="material-icons">favorite</span>
              <span className="ml-2">Favorites</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/orders"
              className="flex items-center p-4 hover:bg-gray-700 rounded transition"
            >
              <span className="material-icons">assignment</span>
              <span className="ml-2">Orders</span>
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/payment-methods"
              className="flex items-center p-4 hover:bg-gray-700 rounded transition"
            >
              <span className="material-icons">payment</span>
              <span className="ml-2">Payment Methods</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="p-4">
        <Link to="/Login">
          <button className="w-full bg-red-500 hover:bg-red-600 rounded p-2 transition">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
