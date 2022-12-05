import Head from "next/head";
import ProductList from "../components/ProductList";

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Webshop</title>
      </Head>

      <main>
        <h1>Webshop </h1>
        <ProductList products={products} />{" "}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();
  console.log("products", products);
  return {
    props: {
      products,
    },
  };
}
