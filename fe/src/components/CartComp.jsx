import React, { useContext } from "react";
import { ShopContext } from "./shopContext";

const CartComp = ({ items }) => {
  const { addToCart, removeFromCart, cartItems, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="col-9 col-md-4 ">
      <div className="card m-5">
        <img src={items.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{items.title}</h5>
          <p className="card-text">{items.description}</p>
          <div className="mx-4">
            <button
              className="mx-1 bg-blue-700 size-8"
              onClick={() => addToCart(items.id)}
            >
              +
            </button>
            <input
              className="text-center p-2 rounded-2xl  w-40"
              type="number"
              onChange={(e) =>
                updateCartItemCount(Number(e.target.value), items.id)
              }
              value={cartItems[items.id]}
            />
            <button
              className="mx-1 bg-red-700 size-8"
              onClick={() => removeFromCart(items.id)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartComp;
