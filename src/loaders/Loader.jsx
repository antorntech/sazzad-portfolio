// import React from "react";
// import "./Loader.css";

// const Loader = () => {
//   return (
//     <div className="loader-main">
//       <div className="lds-spinner">
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//       <div>
//         {/* <img src="/images/s.png" alt="" className="w-[250px]" /> */}
//         <h1 className="text-2xl font-bold text-white">SAZZAD</h1>
//       </div>
//     </div>
//   );
// };

// export default Loader;

import React from "react";

const Loader = () => {
  return (
    <div className="bg-[#18377e] w-full h-screen flex justify-center items-center">
      <h1 className="text-3xl uppercase font-bold text-white animate-pulse">
        SA<span className="text-[#d64734]">ZZ</span>AD
      </h1>
    </div>
  );
};

export default Loader;
