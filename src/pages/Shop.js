import React from "react";
import Products from "../components/Products";

const Shop = () => {
  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <Products />
      </div>
    </div>
  );
};
export default Shop;
