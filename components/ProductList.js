import Link from "next/link";
import React from "react";
import Image from "next/image";

const ProductList = ({ products }) => {
  console.log(products, "products");
  return (
    <div>
      <h1>Webshop </h1>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {products &&
          products.map((product) => (
            <div className="  bg-white pt-6 shadow-xl">
              <Image
                src={product.image}
                alt={product.title}
                width={250}
                height={150}
                className="mx-auto w-[350px] h-[200px] object-contain "
              />
              <div className="mt-4 px-6  ">
                <h2>€ {product.price}</h2>
                <p>{product.title}</p>
                <button className="bg-black hover:bg-red text-white p-2  block mx-auto my-4 cursor-pointer">
                  Add to basket
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
