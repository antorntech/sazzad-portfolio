import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.designerarif.com/api/v1/herocontent")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const phoneNumber = "+8801996774893";
  const message = "Hello, I'm interested in your work!";
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <section className="h-[80vh] md:h-[80vh] mt-[20px] md:mt-20">
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto md:px-4 lg:px-0 gap-5 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="-mt-[45px] md:mt-0 mr-auto place-self-center md:col-span-6">
            <h1 className="text-[#209c62] text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight py-5">
              {data[0]?.title ? data[0]?.title : "SAZZAD"}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              {data[0]?.description
                ? data[0]?.description
                : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur fuga quasi animi veritatis."}
            </p>
            <div className="mt-5 md:mt-10 flex flex-col lg:flex-row items-center gap-4 md:gap-6">
              <Link
                to="/contact"
                className="border-[2px] border-[#209c62] px-8 py-2 md:py-4 hover:bg-[#209c62] font-semibold rounded-md text-[#209c62] hover:text-white w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300"
              >
                <span>Contact With Me</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="https://www.facebook.com/helloarif0?mibextid=ZbWKwL"
                  target="_blank"
                  className="border-[2px] border-[#209c62] w-10 h-10 md:w-14 md:h-14 flex justify-center items-center hover:hover:bg-[#209c62] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-md text-black"
                >
                  <i className="fa fa-solid fa-facebook text-black text-lg"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/helloarif"
                  target="_blank"
                  className="border-[2px] border-[#209c62] w-10 h-10 md:w-14 md:h-14 flex justify-center items-center hover:hover:bg-[#209c62] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-md text-black"
                >
                  <i className="fa fa-solid fa-linkedin text-black text-lg"></i>
                </Link>
                <Link
                  to="/"
                  onClick={handleClick}
                  className="border-[2px] border-[#209c62] w-10 h-10 md:w-14 md:h-14 flex justify-center items-center hover:hover:bg-[#209c62] hover:text-[#002E3D] font-semibold transition-all duration-300 rounded-md text-black"
                >
                  <i className="fa-brands fa-whatsapp text-black text-lg"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:mt-0 md:col-span-6 flex justify-center items-center lg:justify-end lg:items-center">
            <img
              // src={`https://api.designerarif.com/${data[0]?.banner}`}
              src="bg.png"
              alt="mockup"
              className="size-[300px] md:size-[500px] object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
