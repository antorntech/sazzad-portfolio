import React, { useState } from "react";
import { Link } from "react-router-dom";
import bannerVector from "../../assets/imgs/banner-vector.png";
import CustomVideoModal from "../customVideoModal/CustomVideoModal";
import bgBanner from "../../assets/imgs/banner-bg-2.jpg";

const HomeSlider = () => {
  const phoneNumber = "+8801795937735";
  const message = "Hello, I'm interested in your work!";
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedVideo(null);
  };
  return (
    <>
      <section className="h-[90vh] md:h-screen">
        <div
          className={`px-4 md:px-0 bg-no-repeat bg-cover bg-[url('/images/banner-bg-2.jpg')] bg-center h-full w-full relative overflow-hidden z-[1] before:absolute before:inset-0 before:bg-[#18377e]/70 before:-z-[1]`}
        >
          <div className="max-w-screen-xl h-full mx-auto flex flex-col justify-center z-30">
            <h6 className="font-semibold text-xl md:text-[2rem] mb-[12px] text-white">
              Business expo 2024
            </h6>
            <h1 className="text-white text-[clamp(42px,6.25vw,12rem)] font-semibold leading-[1.1] mb-[36px] md:mb-[36px]">
              Big Conference <br />
              <span className="font-normal tracking-tighter"> & Workshop</span>
            </h1>
            <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-6">
              <Link
                to="/contact"
                className="border-[2px] border-white px-8 py-2 md:py-4 hover:bg-white font-semibold rounded-md text-white hover:text-[#18377e] w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300"
              >
                <span>Contact With Me</span>
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <div className="flex items-center gap-4">
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  className="group border-[2px] border-white w-10 h-10 md:w-14 md:h-14 flex justify-center items-center hover:bg-white font-semibold transition-all duration-300 rounded-md"
                >
                  <i className="fa fa-solid fa-facebook text-white text-lg group-hover:text-[#18377e]"></i>
                </Link>
                <Link
                  to="https://www.linkedin.com/in/"
                  target="_blank"
                  className="group border-[2px] border-white w-10 h-10 md:w-14 md:h-14 flex justify-center items-center hover:bg-white font-semibold transition-all duration-300 rounded-md"
                >
                  <i className="fa fa-solid fa-linkedin text-white text-lg group-hover:text-[#18377e]"></i>
                </Link>
                <Link
                  to="/"
                  onClick={handleClick}
                  className="group border-[2px] border-white w-10 h-10 md:w-14 md:h-14 flex justify-center items-center hover:bg-white font-semibold transition-all duration-300 rounded-md"
                >
                  <i className="fa-brands fa-whatsapp text-white text-xl group-hover:text-[#18377e]"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute top-[20%] left-[40%] animate-pulse z-20">
            <img src={bannerVector} alt="banner-vector.png" />
          </div>
          <div className="absolute top-[40%] left-[10%] md:top-[30%] md:left-[20%] -z-20">
            <h1 className="text-[#ffffff4b] text-[5em] md:text-[15rem] font-bold leading-[1.5] animate-pulse">
              BUSINESS
            </h1>
          </div>
          <div className="absolute top-[65%] left-[60%] animate-pulse -z-20">
            <img
              src={bannerVector}
              alt="banner-vector.png"
              className="size-8"
            />
          </div>
          <div className="absolute bottom-[10%] md:top-[50%] md:right-[15%] z-20">
            <div className="cursor-pointer border-[1px] border-[#ffffff4b] w-24 h-24 rounded-full flex justify-center items-center">
              <div
                className="w-14 h-14 flex justify-center items-center bg-white rounded-full pulse-animation"
                onClick={() =>
                  handleVideoClick(
                    "https://www.youtube.com/embed/Cn4G2lZ_g2I?si=7yPAFIngFIDsDoie"
                  )
                }
              >
                <i className="fa-solid fa-play text-[#18377e] text-lg"></i>
              </div>
            </div>
          </div>
          <div className="absolute top-[60%] left-[20%] md:left-[50%] -z-20">
            <h1 className="text-[#ffffff4b] text-[5rem] md:text-[15rem] font-bold leading-[1.5] animate-pulse">
              EXPO
            </h1>
          </div>
        </div>
      </section>
      <CustomVideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        video={selectedVideo}
      />
    </>
  );
};

export default HomeSlider;
