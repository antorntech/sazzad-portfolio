import React, { useEffect, useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const About = () => {
  const [about, setAbout] = useState([
    {
      id: 1,
      name: "Sazzad Hossain",
      address: "Dhaka, Bangladesh",
      phone: "+880 1555 555 555",
      email: "sazzad@gmail",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut possimus perferendis dolores tempore illum quibusdam esse accusantium totam, tenetur modi!",
    },
  ]);
  // useEffect(() => {
  //   fetch("https://api.designerarif.com/api/v1/about")
  //     .then((res) => res.json())
  //     .then((data) => setAbout(data));
  // }, []);

  return (
    <>
      <PageHeader title="About" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="hero-banner02.png"
                alt=""
                className="w-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-5xl text-black font-bold">
                Hello, I'm <span className="text-[#18377e]">SAZZAD</span>
              </h1>
              <p className="text-gray-500 mt-3 md:mt-5">
                {about[0]?.description}
              </p>
              <div className="mt-3 md:mt-5">
                <table>
                  <tr className="text-gray-500  text-lg">
                    <td>Name</td> <td className="pl-5">: {about[0]?.name}</td>
                  </tr>
                  <tr className="text-gray-500 text-lg">
                    <td>Address</td>{" "}
                    <td className="pl-5">: {about[0]?.address}</td>
                  </tr>
                  <tr className="text-gray-500 text-lg">
                    <td>Phone</td> <td className="pl-5">: {about[0]?.phone}</td>
                  </tr>
                  <tr className="text-gray-500 text-lg">
                    <td>Email</td> <td className="pl-5">: {about[0]?.email}</td>
                  </tr>
                </table>
                <Link
                  to="/contact"
                  className="mt-5 border-[2px] border-[#18377e] px-8 py-2 md:py-4 hover:bg-[#18377e] font-semibold rounded-md text-[#18377e] hover:text-white w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300"
                >
                  <span>Contact With Me</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
