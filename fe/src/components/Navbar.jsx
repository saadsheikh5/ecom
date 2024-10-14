import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "./shopContext";
const Navbar = () => {
  const { getTotalCartAmount, totalItemsInCart } = useContext(ShopContext);
  const totalItems = totalItemsInCart();
  const amount = getTotalCartAmount();
  const Navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    Navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <>
      <div className=" bg-blue-900 h-12 flex justify-between sticky top-0 z-10">
        <Link to="/">
          <div className=" my-2 py-1 mx-8 bg-slate-100  text-center w-16 rounded-lg h-8">
            Home
          </div>
        </Link>
        <form onSubmit={handleSubmit} className=" p-1 ">
          <input
            className="w-96 rounded-lg px-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search Products"
          />
          <button
            className="bg-slate-100   m-2 rounded-md w-16"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>
        <div>
          <Link to="/cart">
            <button className="  bg-slate-100   rounded-lg h-8 w-40 m-2">
              Cart({totalItems}) /${amount}
            </button>
          </Link>
          <Link to="/login">
            <button className="  bg-slate-100   rounded-lg h-8 w-20 m-2">
              Login
            </button>
          </Link>
        </div>
      </div>
      <div className=" bg-slate-100 h-6 flex relative ">
        <Link to="/laptops">
          <div className="px-3 font-semibold">LAPTOPS</div>
        </Link>

        <Link to="/mobiles">
          <div className="px-3 font-semibold">MOBILES</div>
        </Link>
      </div>
    </>
  );
};

const Category = () => {
  return (
    <div className="bg-neutral-300 h-24 w-60  ">
      <Link to="/laptops">
        <div className="p-2 py-2">laptops</div>
      </Link>

      <Link to="/mobiles">
        <div className="p-2 py-2">mobiles</div>
      </Link>
    </div>
  );
};

export default Navbar;
