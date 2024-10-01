import React from "react";
import { Link } from "react-router-dom";

const HomeNews = () => {
  const news = [
    {
      id: 1,
      title: "Prof Sazzad reappointed as UGC member",
      date: "05, Jun - 2023",
      author: "Admin",
      description:
        "Prof Dr Sazzad Hossain has been appointed as full-time member of University Grant Commission for second term. Ministry of Education issued a notification on Monday extending his tenure for next four year. Dr Hossain now teaches computer science and engineering at University of Liberal Arts Bangladesh (ULAB). He is an advisor to the USA-based company ‘PeopleNTech’. Technology expert Dr Hossain hails from Chattogram. He was born on December 16 in 1968. He studied at Chittagong University of Engineering and Technology (CUET) and Faujdarhat Cadet College. Dr Hossain obtained his doctorate of philosophy degree and masters in computer science from Portland State University in US prior completing bachelor at Moscow Technical University in Russia.",
      img: "/images/blog-5.jpg",
    },
    {
      id: 2,
      title: "STEAM Education to Prepare Our Students for 4IR and Beyond",
      date: "20, Jul - 2023",
      author: "Admin",
      description:
        "The way we live, work, and study is changing at a rapid pace because of the fourth industrial revolution. For students to be ready for the potential and difficulties of this new era, STEAM education is crucial. There are a few obvious reasons why Bangladesh’s entire educational strategy should centre on the STEAM education method. 'Vision 2041' and 'SMART Bangladesh' concepts call for a cutting-edge and successful educational strategy like STEAM education. What is STEAM education? STEM, a concept coined by scientific administrators at the National Science Foundation (NSF) of the United States in the 2000s, is where STEAM got its start. STEM refers to a field and curriculum that focus on teaching science, technology, engineering, and math. In order to address societal issues and the demands of shifting employment markets, STEM-focused curricula have been expanded to many nations outside of the United States. Programs have been built in nations like Australia, China, France, South Korea, Taiwan, the United Kingdom, and India. Critics of STEM assert that exposure to the many arts helps people make better decisions and exhibit greater creativity and ingenuity. They contend that what makes one successful is not profound knowledge but rather the application of the arts in real-world settings. As a result, competing frameworks like STEAM have entered the conversation. Additionally, the STEAM education approach emphasizes scientific subjects without ignoring the students' humanistic qualities. In other words, technical expertise and a scientifically oriented way of thinking about problems combine with creativity to provide novel ideas that cut across disciplinary boundaries.",
      img: "/images/blog-3.jpg",
    },
    {
      id: 4,
      title:
        "A day-long seminar held on Mechatronics & Industry 4.0: Practice-oriented Education and Training for Employment",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Mechatronics & Industry 4.0: Practice-oriented Education and Training for Employment is a day-long seminar and technology demonstration, jointly organized by the Department of Robotics and Mechatronics Engineering, University of Dhaka; FESTO Didactic SE, Germany; University of Bremen, Germany and Sincos Engineers Limited, Bangladesh. FESTO Didactic is the world-leading provider of equipment and solutions for technical education in the field of STEM. Collaborating with the esteemed faculty members from the University of Bremen, Germany and Sincos Engineers Limited, the day-long seminar has been arranged to provide attendees with an opportunity to get hands-on experience and knowledge about the latest advancements in mechatronics pertaining to the 4th Industrial Revolution. With the inclusion of talks from the distinguished guest speakers and demonstrations organized by Festo Didactic SE, the seminar aims to provide an interactive session from which our attendees can take away valuable advice and even practical knowledge to further augment their skill sets.",
      img: "/images/blog-6.jpg",
    },
  ];
  return (
    <>
      <section
        className="py-6 md:py-[50px] lg:py-[80px]"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
          <header>
            <h1
              className="text-[#18377e] text-5xl font-bold uppercase"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              News
            </h1>
            <div
              className="w-20 h-1 bg-[#18377e] my-1"
              data-aos="fade-right"
              data-aos-duration="1500"
            ></div>
            <p className="text-gray-500">All latest news are available here.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            {news.map((item, index) => (
              <div key={index} className="p-3 shadow-lg rounded-md group ">
                <div className="overflow-hidden rounded-md">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full md:h-[250px] group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                  />
                </div>
                <div className="my-3">
                  <h1 className="text-2xl font-semibold mt-1">
                    {item.title.slice(0, 40)}...
                  </h1>
                  <Link
                    to={{
                      pathname: `/news/${item.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`,
                    }}
                    state={{
                      id: item.id,
                    }}
                  >
                    <button className="text-[#18377e] mt-2 hover:text-[#d64734] transition-all duration-500">
                      Read More <i className="fa-solid fa-angle-right"></i>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeNews;
