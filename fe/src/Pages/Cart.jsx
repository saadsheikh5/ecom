import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../components/shopContext";
import { items } from "../assets/Data";
import CartComp from "../components/CartComp";
import { useNavigate, Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, setcartItems, getTotalCartAmount } =
    useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const Navigate = useNavigate();

  return (
    <div>
      {totalAmount > 0 ? (
        <div>
          <div>
            <div>
              {items.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <CartComp items={product} key={product.id} />;
                }
              })}
            </div>
            <div className=" h-8 w-36 mx-72 my-16 flex">
              <div className="bg-gray-300 rounded-lg text-xl h-16 w-40 py-2 px-2 text-center font-bold">
                <h1>TOTAL AMOUNT:${totalAmount}</h1>
              </div>
              <button
                className="bg-slate-300 px-4 mx-4  text-2xl font-semibold rounded-lg "
                onClick={() => Navigate("/checkout")}
              >
                checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-red-400 w-96 h-96 items-center my-20 mx-auto text-center ">
          <h1 className="font-black text-8xl">YOUR CART IS EMPTY!</h1>
          <Link to="/">
            <button className="my-4 bg-orange-300 text-2xl rounded-2xl p-2">
              CONTINUE SHOPPING!
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
