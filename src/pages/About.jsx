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

  return (
    <>
      <PageHeader title="About" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="w-full grid grid-cols-1 md:grid-cols-5 custom-shadow rounded-md bg-[#FBFBFB]">
            <div className="w-full md:col-span-2">
              <img
                src="/images/about-banner.jpg"
                alt=""
                className="w-full h-full object-fit rounded-md"
              />
            </div>
            <div className="w-full md:col-span-3 p-3 md:p-10">
              <h1 className="text-xl md:text-3xl text-black font-bold">
                Professor Dr. Sazzad Hossain
              </h1>
              <p className="text-[#18377e] pb-3">
                Honorable Member of University Grand Commission of Bangladesh
              </p>
              <div>
                <h3 className="text-lg text-gray-600 font-bold">
                  {" "}
                  About Professor Dr. Sazzad Hossain:
                </h3>
                <p className="text-gray-500">
                  With a wealth of experience and expertise, Dr. Hossain has
                  been actively involved in shaping the higher education
                  landscape in Bangladesh. His commitment to academic
                  excellence, coupled with a passion for research and
                  development, has garnered him respect and admiration from
                  colleagues and students alike.
                </p>
              </div>
              <hr className="my-3" />
              <div>
                <h3 className="text-lg text-gray-600 font-bold">
                  {" "}
                  Role at UGC and ERDF:
                </h3>
                <p className="text-gray-500">
                  As a Member of the UGC, Dr. Hossain plays a pivotal role in
                  the formulation and implementation of policies that drive the
                  quality and accessibility of higher education. Simultaneously,
                  his leadership at the ERDF reflects his dedication to
                  fostering research initiatives and educational development in
                  Bangladesh.
                </p>
              </div>
              <hr className="my-3" />
              <div>
                <h3 className="text-lg text-gray-600 font-bold">
                  {" "}
                  Insights and Perspectives:
                </h3>
                <p className="text-gray-500">
                  Join us as Professor Dr. Sazzad Hossain shares his insights on
                  the current state of education, the challenges faced, and the
                  strategies for future growth. Discover the vision that drives
                  his leadership and the initiatives he champions for the
                  betterment of education in Bangladesh.
                </p>
              </div>
              <hr className="my-3" />
              <div>
                <h3 className="text-lg text-gray-600 font-bold">
                  {" "}
                  Education Advocacy:
                </h3>
                <p className="text-gray-500">
                  Dr. Hossain's commitment to education advocacy extends beyond
                  his official roles. Learn about his efforts to promote
                  inclusive and innovative educational practices that empower
                  students and contribute to the overall development of the
                  nation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
