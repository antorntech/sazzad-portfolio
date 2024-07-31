import React from "react";

const Sample = () => {
  return (
    <div className="w-full h-[50vh]">
      <div className="w-full h-full relative overflow-hidden bg-[url('/images/banner-bg-1.jpg')] bg-no-repeat bg-cover bg-center z-[1] before:absolute before:bg-[#000]/70 before:inset-0 before:-z-[1]">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-white text-5xl font-bold">Sample</h1>
        </div>
      </div>
    </div>
  );
};

export default Sample;
