import React, { useEffect, useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const About = () => {
  // const [about, setAbout] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.designerarif.com/api/v1/about")
  //     .then((res) => res.json())
  //     .then((data) => setAbout(data));
  // }, []);

  const data = {
    name: "Professor Dr. Sazzad Hossain",
    designation:
      "Honorable Member of University Grand Commission of Bangladesh",
    email: "sazzadhossain@example.com",
    phone: "0123456789",
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
                    <strong>Email</strong>
                    <p className="text-gray-500">{data.email}</p>
                  </div>
                </div>
                <div>
                  <div className="mt-3">
                    <strong>Phone</strong>
                    <p className="text-gray-500">{data.phone}</p>
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
    </>
  );
};

export default About;
