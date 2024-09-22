import React, { useEffect, useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";
import CustomModal from "../components/custommodal/CustomModal";

const About = () => {
  // const [about, setAbout] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.designerarif.com/api/v1/about")
  //     .then((res) => res.json())
  //     .then((data) => setAbout(data));
  // }, []);

  const gallerys = [
    {
      id: 1,
      thumbnail: "/certification/certification1.jpeg",
    },
    {
      id: 2,
      thumbnail: "/certification/certification2.jpeg",
    },
    {
      id: 3,
      thumbnail: "/certification/certification3.jpeg",
    },
    {
      id: 4,
      thumbnail: "/certification/certification4.jpeg",
    },
    {
      id: 5,
      thumbnail: "/certification/certification5.jpeg",
    },
    {
      id: 6,
      thumbnail: "/certification/certification6.jpeg",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const data = {
    name: "Professor Dr. Sazzad Hossain",
    designation:
      "Honorable Member of University Grand Commission of Bangladesh",
    email: " sazzad69@gmail.com",
    officialEmail: "sazzad@piit.us",
    address: "Dhaka, Bangladesh",
    image: "/images/about-banner.jpg",
    description:
      "With a wealth of experience and expertise, Dr. Hossain has been actively involved in shaping the higher education landscape in Bangladesh. His commitment to academic excellence, coupled with a passion for research and development, has garnered him respect and admiration from colleagues and students alike.",
  };

  return (
    <>
      <PageHeader title="About" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <header className="text-center">
            <h1 className="text-2xl md:text-5xl text-black font-bold">
              Profile
            </h1>
            <p className="text-gray-500 text-lg">
              Everyone findout the details from here
            </p>
          </header>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 mt-3 md:my-12 ">
            <div className="w-full md:col-span-2">
              <h1 className="text-xl md:text-3xl text-black font-bold">
                About Me
              </h1>
              <p className="text-gray-500 text-md text-justify mt-3">
                {data.description}
              </p>
              <h1 className="text-xl md:text-3xl text-black font-bold mt-5">
                Details
              </h1>
              <div className="flex flex-col md:flex-row md:gap-6">
                <div>
                  <div className="mt-3">
                    <strong>Name</strong>
                    <p className="text-gray-500">{data.name}</p>
                  </div>
                  <div className="mt-3">
                    <strong>Personal Email</strong>
                    <p className="text-gray-500">{data.email}</p>
                  </div>
                </div>
                <div>
                  <div className="mt-3">
                    <strong>Official Email</strong>
                    <p className="text-gray-500">{data.officialEmail}</p>
                  </div>
                  <div className="mt-3">
                    <strong>Address</strong>
                    <p className="text-gray-500">{data.address}</p>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Link
                  to="/contact"
                  className="border-[2px] border-[#18377e] px-8 py-2 md:py-4 hover:bg-[#18377e] font-semibold rounded-md text-[#18377e] hover:text-white w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300"
                >
                  <span>Contact With Me</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="w-full md:col-span-2">
              <div className="w-full h-full bg-[#18377e] md:mt-12 relative">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full custom-shadow object-cover absolute bottom-[-5%] right-[-4%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-6 md:pb-[50px] lg:pb-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <header className="text-center">
            <h1 className="text-2xl md:text-5xl text-black font-bold">
              Education
            </h1>
            <p className="text-gray-500 text-lg">
              All the certifications are here
            </p>
          </header>
          <div className="mt-5 md:mt-10">
            <div className="grid grid-cols-1 gap-5">
              <div className="flex items-start shadow-lg p-5">
                <span className="text-lg md:text-xl font-semibold">
                  <strong className="text-2xl pr-1">1.</strong>
                  Ph.D. in Electrical and Computer Engineering, Portland State
                  University, Oregon, USA Dissertation: Classical and Quantum
                  Search Algorithms for Quantum Circuits and Optimization of
                  Quantum Oracles <br /> Advisor: Professor Dr. Marek A
                  Perkowski
                </span>
              </div>
              <div className="flex items-start shadow-lg p-5">
                <span className="text-lg md:text-xl font-semibold">
                  <strong className="text-2xl pr-1">2.</strong>
                  M.Sc. (Engg.) in Electrical and Computer Engineering, Portland
                  State University, Oregon, USA. Advisor: Professor Dr. Marek A
                  Perkowski
                </span>
              </div>
              <div className="flex items-start shadow-lg p-5">
                <span className="text-lg md:text-xl font-semibold">
                  <strong className="text-2xl pr-1">3.</strong>
                  B.Sc. (Engg.). in Electrical System Network Engineering Moscow
                  Technical University, Moscow, Russia
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-6 md:pb-[50px] lg:pb-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <header className="text-center">
            <h1 className="text-2xl md:text-5xl text-black font-bold">
              Certification
            </h1>
            <p className="text-gray-500 text-lg">
              All the certifications are here
            </p>
          </header>
          <div className="grid grid-cols-2 md:grid-cols-3 mt-5 md:mt-10">
            {gallerys.map((gallery) => (
              <div
                key={gallery.id}
                className="w-full h-full md:h-[300px] overflow-hidden relative group"
              >
                <img
                  src={gallery.thumbnail}
                  alt=""
                  className="w-full h-full object-fit  group-hover:scale-125 transition-all duration-500"
                />
                <div className="absolute top-0 left-0 w-full h-full md:h-[300px] bg-black opacity-0 group-hover:opacity-75 transition-all duration-500">
                  <i
                    className="fa-solid fa-circle-plus text-5xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => handleImageClick(gallery.thumbnail)}
                  ></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CustomModal
        isOpen={isModalOpen}
        onClose={closeModal}
        image={selectedImage}
      />
    </>
  );
};

export default About;
