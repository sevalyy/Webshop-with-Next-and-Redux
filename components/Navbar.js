import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";

const Navbar = () => {
  return (
    <div className="shadow-xl bg-yellow sticky top-0">
      <div className="container flex justify-between mx-auto text-[1.5em]">
        <Link href="/" className="cursor-pointer">
          Logo
        </Link>
        <Link href="/basket">
          <HiShoppingCart />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
