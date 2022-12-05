import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="w-full shadow-xl bg-yellow fixed left-0 bottom-0">
        <hr />
        <div className="container flex justify-between mx-auto text-[1.5em]">
          <div>Let's keep in touch</div>
          <div className="flex justify-around items-center">
            <span>
              <FaGithub />
            </span>
            <span>
              <FaLinkedin />
            </span>
          </div>
          <div>Copyright</div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
