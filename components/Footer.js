import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="w-full shadow-xl bg-yellow fixed left-0 bottom-0">
        <hr />
        <div className="container flex justify-between mx-auto text-[1.2em] py-4">
          <div>Let's keep in touch</div>
          <div className="flex justify-around items-center">
            <span className="mx-8">
              <Link href="https://www.linkedin.com/in/seval-yamanyar/">
                {" "}
                <FaLinkedin />
              </Link>
            </span>
            <span className="mx-8">
              <Link href="https://github.com/sevalyy">
                {" "}
                <FaGithub />
              </Link>
            </span>
          </div>
          <div> Copyright © 2022 by Seval</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
