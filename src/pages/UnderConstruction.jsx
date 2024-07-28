import React from "react";
import PageHeader from "../components/pageheader/PageHeader";

const UnderConstruction = () => {
  return (
    <div>
      <PageHeader title="Underconstruction" />
      <div className="w-full h-[60vh] flex justify-center items-center">
        <div>
          <img src="demo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;
