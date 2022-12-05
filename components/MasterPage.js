import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MasterPage = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MasterPage;
