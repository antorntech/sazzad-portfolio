import React from "react";

const HomeAchievement = () => {
  const achievements = [
    {
      id: 1,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      logo: "https://logo.clearbit.com/clearbit.com",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      logo: "https://clearbit.com/images/homepage/hs_sprocket.png",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor",
      logo: "https://marketplace.canva.com/EAFvMagh96A/1/0/1600w/canva-colorful-modern-infinity-technology-free-logo-wGSY8kq1SkY.jpg",
    },
  ];
  return (
    <section
      className="py-6 md:py-[50px] lg:py-[80px] bg-[#18377e4d]"
      data-aos="fade-in"
      data-aos-duration="3000"
    >
      <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
        <header>
          <h1 className="text-[#18377e] text-5xl font-bold uppercase">
            Achievements
          </h1>
          <div className="w-20 h-1 bg-[#18377e] my-1"></div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
            Quae, tempore doloribus!
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-3 hover:shadow-lg rounded-md group bg-white transition-all duration-500"
            >
              <div className="overflow-hidden size-[150px] rounded-full">
                <img
                  src={achievement.logo}
                  alt=""
                  className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                />
              </div>
              <div className="my-3 text-center">
                <h1 className="text-2xl font-semibold mt-1">
                  {achievement.title}
                </h1>
                <p className="text-gray-500 mt-1">{achievement.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAchievement;
