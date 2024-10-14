import React from "react";
import { useFilter } from "../customHooks/useFilter";
import Product from "../components/Product";

const Mobiles = () => {
  const [filteredData] = useFilter("mobiles", (data) => data.category);
  return (
    <div className=" container">
      <div className="row">
        {filteredData.map((i) => (
          <Product items={i} key={i.id} />
        ))}
      </div>
    </div>
  );
};

export default Mobiles;
