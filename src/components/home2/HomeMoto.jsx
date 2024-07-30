import React from "react";

const HomeMoto = () => {
  const achievements = [
    {
      id: 1,
      title: "smart education",
      logo: "/icons/smart-education.png",
    },
    {
      id: 2,
      title: "smart citizen",
      logo: "/icons/smart-citizen.png",
    },
    {
      id: 3,
      title: "smart economy",
      logo: "/icons/smart-economy.png",
    },
    {
      id: 3,
      title: "smart society",
      logo: "/icons/smart-society.png",
    },
  ];
  return (
    <section
      className="py-6 md:py-[50px] lg:py-[80px] bg-[#18377e4d]"
      data-aos="fade-in"
      data-aos-duration="3000"
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-3 hover:shadow-lg rounded-md group transition-all duration-500"
            >
              <img src={achievement.logo} alt="" className="w-[100px]" />
              <div className="my-3 text-center">
                <h1 className="text-2xl font-semibold mt-1">
                  {achievement.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeMoto;
