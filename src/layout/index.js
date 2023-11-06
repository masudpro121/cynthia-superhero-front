import React from "react";
import { Navbar } from "../components";
const LayOut = ({ children }) => {
  return (
    <div>
      <div className="layout-navbar">
        <Navbar />
      </div>
      <div className="layout-data">{children}</div>
    </div>
  );
};
export default LayOut;
