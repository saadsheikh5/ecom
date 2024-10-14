import React, { createContext, useContext, useEffect, useState } from "react";
import { items } from "../assets/Data";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < items.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};
export const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState(() => {
    const storedCart = localStorage.getItem("cartitems");
    return storedCart ? JSON.parse(storedCart) : getDefaultCart();
  });

  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartItems));
  }, [cartItems]);

  const totalItemsInCart = () => {
    let totalitem = 0;
    for (const item in cartItems) {
      totalitem += Number(cartItems[item]);
    }
    return totalitem;
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = items.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (id) =>
    setcartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));

  const contextValue = {
    cartItems,
    setcartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    updateCartItemCount,
    totalItemsInCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
