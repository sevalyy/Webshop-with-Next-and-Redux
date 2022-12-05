import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FaHome } from "react-icons/fa";

import Image from "next/image";

const Navbar = () => {
  return (
    <div className="shadow-xl bg-yellow sticky top-0">
      <div className="container flex justify-between align-center items-center mx-auto text-[1.5em]">
        <Link href="/">
          <FaHome />
        </Link>
        <Link href="/" className="cursor-pointer">
          <Image
            src="/seval2.png"
            alt="Logo"
            width={180}
            height={60}
            className="m-2"
          />
        </Link>
        <Link href="/basket">
          <HiShoppingCart className="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
