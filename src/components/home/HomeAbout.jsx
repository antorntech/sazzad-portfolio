import React from "react";
import aboutVector1 from "../../assets/imgs/about-vector-1.png";
import aboutVector2 from "../../assets/imgs/about-vector-2.png";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <section
      className="py-6 md:py-[50px] lg:py-[80px] relative"
      data-aos="fade-in"
      data-aos-duration="3000"
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0 ">
        <div className="absolute md:bottom-[20%] md:left-[5%]">
          <img src={aboutVector1} alt="" className="animate-pulse" />
        </div>
        <div className="absolute md:top-[20%] md:right-[2%]">
          <img src={aboutVector2} alt="" className="animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-32">
          <div className="relative w-full md:w-1/3 ">
            <img
              src="/images/about-img.jpg"
              alt=""
              className="rounded-md w-full h-full object-contain custom-shadow"
            />
            <div className="border-[10px] border-white rounded-lg absolute bottom-6 -right-20 hidden md:block">
              <img
                src="/images/about-img-2.jpg"
                alt=""
                className="rounded-lg custom-shadow w-[200px] h-[250px]"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex items-center gap-2">
              <div className="bg-[#18377e] w-10 h-[2px]"></div>
              <h6 className="text-[#18377e]">About Sazzad</h6>
            </div>
            <h1 className="text-2xl md:text-5xl pt-3 pb-5">
              Know More About Sazzad
            </h1>
            <p className="text-gray-500 text-justify">
              With a wealth of experience and expertise, Dr. Hossain has been
              actively involved in shaping the higher education landscape in
              Bangladesh. His commitment to academic excellence, coupled with a
              passion for research and development, has garnered him respect and
              admiration from colleagues and students alike.
            </p>

            <div className="mt-8">
              <Link
                to="/about"
                className="border-[2px] border-[#18377e] px-8 py-2 md:py-4 hover:bg-[#18377e] font-semibold rounded-md text-[#18377e] hover:text-white w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300"
              >
                <span>Read More</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
