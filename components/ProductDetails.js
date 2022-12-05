import React from "react";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  return (
    <div className=" mt-8 pt-8 mx-auto bg-white shadow-xl border-2 border-grey-600 rounded-xl">
      <Image
        src={product.image}
        alt={product.title}
        width={450}
        height={250}
        className="mx-auto w-[350px] h-[200px] object-contain "
      />
      <div className="mt-4 px-6 text-center">
        <p className="font-extrabold p-4">€ {product.price}</p>
        <p className="font-bold p-4">{product.title}</p>
        <p>{product.description}</p>

        <button className="bg-black hover:bg-red text-white p-2  block mx-auto my-4 cursor-pointer">
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
