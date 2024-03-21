import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* props.Children */}
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
