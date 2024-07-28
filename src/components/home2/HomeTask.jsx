import React from "react";
import { Link } from "react-router-dom";
import statsVector1 from "../../assets/imgs/stats-vector-1.png";
import statsVector2 from "../../assets/imgs/stats-vector-2.png";
import statsVector3 from "../../assets/imgs/stats-vector-3.png";

const HomeTask = () => {
  return (
    <section
      className="h-screen md:h-[80vh]"
      data-aos="fade-in"
      data-aos-duration="3000"
    >
      <div class="px-4 md:px-0 bg-no-repeat bg-cover bg-[url('stats-bg.jpg')] bg-center h-full w-full relative overflow-hidden z-[1] before:absolute before:inset-0 before:bg-[#18377e]/70 before:-z-[1]">
        <div className="absolute top-10 md:top-[20%] md:left-[5%]">
          <img src={statsVector1} alt="" className="animate-pulse" />
        </div>
        <div className="absolute top-52 right-5 md:top-[10%] md:right-[5%]">
          <img src={statsVector2} alt="" className="animate-pulse opacity-50" />
        </div>
        <div className="absolute bottom-5 right-5 md:bottom-[10%] md:right-[5%]">
          <img src={statsVector3} alt="" className="animate-pulse" />
        </div>
        <div className="max-w-screen-xl h-full mx-auto flex flex-col justify-center gap-8 z-30">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl text-white font-bold">50+</h1>
              <p className="text-white">Workshop We Offer</p>
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl text-white font-bold">25+</h1>
              <p className="text-white">Visionary Speaker</p>
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl text-white font-bold">
                70k+
              </h1>
              <p className="text-white">Event Participants</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="text-white text-xl md:text-[2rem] leading-[2.5rem] font-semibold text-center">
              Never Miss Another Speaker <br /> Announcement
            </h1>
            <div className="mt-5">
              <Link
                to="/contact"
                className="border-[2px] border-white px-8 py-2 md:py-4 hover:bg-white font-semibold rounded-md text-white hover:text-[#18377e] w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300"
              >
                <span>Contact With Me</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTask;
