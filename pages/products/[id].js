import React from "react";

const productWithId = ({ product }) => {
  return <div>{product.title}</div>;
};

export default productWithId;

export async function getStaticPaths() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log("products", products);
  return {
    paths: products.map((product) => ({
      params: { id: `${product.id}` },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  //take params from getStaticPaths()

  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
