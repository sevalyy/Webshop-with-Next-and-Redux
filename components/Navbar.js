import Link from "next/link";
import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import BasketCount from "./BasketCount";

const Navbar = () => {
  return (
    <div className="shadow-xl bg-black text-white sticky top-0 -z-1 ]">
      <div className="container flex justify-between align-center items-center mx-auto text-[1.5em]">
        <Link href="/" className="cursor-pointer">
          <FaHome />
        </Link>
        <Link href="/">
          <Image
            src="/seval2.png"
            alt="Logo"
            width={180}
            height={60}
            className="m-2"
          />
        </Link>
        <Link href="/basket" className="relative">
          <FiShoppingCart className="cursor-pointer" />
          <span className="absolute -top-2 -right-2 text-[10px] bg-red-500 h-[20px] w-[20px] rounded-full grid place-items-center text-white">
            <BasketCount />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
