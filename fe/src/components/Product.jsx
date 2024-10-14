import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShopContext } from "./shopContext";
const Product = ({ items }) => {
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const cartVal = cartItems[items.id];
  return (
    <div className="col-9 col-md-4">
      <div className="card m-5 bg-slate-300">
        <img src={items.imgSrc} className="card-img-top" alt="..." />
        <div className="card-body h-52">
          <h5 className="card-title p-2 font-bold">{items.title}</h5>
          <p className="card-text">{items.description}</p>
          <h5>${items.price}</h5>
          <button
            className="btn btn-primary my-2 "
            onClick={() => addToCart(items.id)}
          >
            Add to cart {cartVal > 0 && <>( {cartVal} )</>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
