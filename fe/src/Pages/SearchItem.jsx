import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "../assets/Data";
import Product from "../components/Product";

const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) =>
        p.title.toLowerCase().includes(term.toLowerCase())
      );

      setFilterData(data);
    };

    filteredData();
  }, [term]);
  return (
    <div className=" container ">
      <div className="row ">
        {filterData.map((i) => (
          <Product items={i} />
        ))}
      </div>
    </div>
  );
};

export default SearchItem;
