import React from "react";
import { useFilter } from "../customHooks/useFilter";
import Product from "../components/Product";

const Laptops = () => {
  const [filteredData] = useFilter("laptops", (data) => data.category);
  return (
    <div>
      <div className=" container">
        <div className="row">
          {filteredData.map((i) => (
            <Product items={i} key={i.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Laptops;
