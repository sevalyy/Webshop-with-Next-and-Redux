import React from "react";
import ProductDetails from "../../components/ProductDetails";

const productWithId = ({ product }) => {
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
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
