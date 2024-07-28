import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-main">
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        {/* <img src="/images/s.png" alt="" className="w-[250px]" /> */}
        <h1 className="text-2xl font-bold text-white">SAZZAD</h1>
      </div>
    </div>
  );
};

export default Loader;
