import React from "react";
import { Link } from "react-router-dom";

const HomeAssociation = () => {
  const associations = [
    {
      id: 1,
      title: "NSO",
      description: "National Steam Olympiad, Bangladesh",
      logo: "/images/stem-logo.png",
      link: "https://www.nationalsteamolympiad.com/",
    },
    {
      id: 2,
      title: "BSPUA",
      description: "Bangladesh Society for Private University Academics",
      logo: "/images/bspua-logo.png",
      link: "https://bspua.org/",
    },
    {
      id: 3,
      title: "ADB",
      description: "Amrai Digital Bangladesh",
      logo: "/images/adb-logo.png",
      link: "https://adb.org.bd/",
    },
  ];
  return (
    <section
      className="py-6 md:py-[50px] lg:py-[80px] bg-[#14388aa4] relative overflow-hidden"
      data-aos="fade-in"
      data-aos-duration="3000"
    >
      <img
        src="/images/cta-vector-1.png"
        alt="cta-vector-1.png"
        className="absolute top-0 left-0 w-[200px]"
      />
      <img
        src="/images/cta-vector-1.png"
        alt="cta-vector-1.png"
        className="absolute bottom-0 right-0 rotate-180 w-[200px]"
      />
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        <header>
          <h1 className="text-[#18377e] text-5xl font-bold uppercase">
            Association
          </h1>
          <div className="w-20 h-1 bg-[#18377e] my-1"></div>
          <p className="text-gray-300">
            Creating the beautiful tapestry of human connection.
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {associations.map((association, index) => (
            <Link to={association.link} key={index} target="_blank">
              <div
                key={index}
                className="flex flex-col justify-center items-center p-3 hover:shadow-lg rounded-md group bg-white transition-all duration-500"
              >
                <div className="w-full flex justify-center items-center">
                  <img
                    src={association.logo}
                    alt=""
                    className="w-full h-full md:w-[300px] md:h-[100px] rounded-md"
                  />
                </div>
                <div className="my-3 text-center">
                  <h1 className="text-2xl font-semibold mt-1">
                    {association.title}
                  </h1>
                  <p className="text-gray-500 mt-1">
                    {association.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAssociation;
