import React from "react";

const ProductList = ({ products }) => {
  console.log(products, "products");
  return <div>{products && products.map((p) => p.title)} </div>;
};

export default ProductList;
