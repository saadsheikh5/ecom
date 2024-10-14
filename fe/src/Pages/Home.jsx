import React from "react";

import { items } from "../assets/Data";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className=" container ">
      <div className="row ">
        {items.map((p) => (
          <Product items={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
