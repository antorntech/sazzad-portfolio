import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ title }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 md:gap-5 h-[200px] md:h-[350px] bg-[#000D83]">
      <div className="w-full h-full flex flex-col justify-center items-center gap-3 bg-[#0000002d]">
        <h1 className="text-2xl font-bold text-center text-white md:text-5xl mt-[60px]">
          {title.toUpperCase().slice(0, 20)}...
        </h1>
        <div className="text-white flex items-center gap-3">
          <Link to="/">Home</Link>{" "}
          <span>
            <i className="fa-solid fa-angles-right"></i>
          </span>{" "}
          <p className="text-gray-500">{title.slice(0, 20)}...</p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
