import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import news1 from "../assets/imgs/evenet-sched-1.jpg";
import news2 from "../assets/imgs/evenet-sched-2.jpg";
import news3 from "../assets/imgs/evenet-sched-3.jpg";
import news4 from "../assets/imgs/evenet-sched-4.jpg";
import { Link } from "react-router-dom";

const News = () => {
  const [gridDisplay, setGridDisplay] = React.useState(true);
  const [listDisplay, setListDisplay] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleGridDisplay = () => {
    setGridDisplay(true);
    setListDisplay(false);
  };

  const handleListDisplay = () => {
    setListDisplay(true);
    setGridDisplay(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const newses = [
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
      id: 3,
      title:
        "Dr. Sazzad Hossain emphasized on maintaining the practice of online classes which has started at the university level during the general holidays due to the coronavirus pandemic",
      date: "24, Jan - 2023",
      author: "Admin",
      description:
        "He said this while visiting the private East Delta University (EDU) in Chittagong on Thursday. Sajjad Hossain said, “Private universities have played a leading role in continuing technological excellence and continuity of education through online classes. Along with live classes, this practice of online should be maintained and UGC will give full support to this end.” In the speech of the President, EDU Vice-Chancellor Mu. Sikandar Khan said, “The UGC has played a timely role by allowing online classes during the pandemic. This has saved Bangladesh's education program from stagnation and backwardness. The main speaker, EDU Founder Vice Chairman Saeed Al Noman said, “If quality universities are given priority in approving new departments, the quality of education will be ensured across the country. In this case private universities can be classified according to standards in adopting policies.”",
      img: "/images/blog-4.jpg",
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

  // Filter newses based on search query
  const filteredNews = newses.filter(
    (news) =>
      news.title.toLowerCase().includes(searchQuery) ||
      news.description.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <PageHeader title="News" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="w-full flex justify-between items-center">
            <div className="w-full">
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search News . . ."
                  className="border border-gray-300 rounded-md px-4 py-2 w-full active:border-[#18377e] focus:outline-[#18377e]"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <i className="fa-solid fa-magnifying-glass absolute right-4 top-4 opacity-20"></i>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center gap-4">
                <img
                  src={
                    gridDisplay ? "/icons/menu-active.png" : "/icons/menu.png"
                  }
                  alt="Grid View"
                  className="w-[30px] h-[30px] cursor-pointer"
                  onClick={handleGridDisplay}
                />
                <img
                  src={
                    listDisplay
                      ? "/icons/view-list-active.png"
                      : "/icons/view-list.png"
                  }
                  alt="List View"
                  className="w-[37px] h-[37px] cursor-pointer"
                  onClick={handleListDisplay}
                />
              </div>
            </div>
          </div>
          <div>
            {filteredNews.length > 0 ? (
              gridDisplay ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 md:mt-12">
                  {filteredNews.map((news) => (
                    <Link
                      key={news.id}
                      to={{
                        pathname: `/news/${news.title
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`,
                      }}
                      state={{
                        id: news.id,
                      }}
                    >
                      <div className="p-3 shadow-lg rounded-md group ">
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={news.img}
                            alt=""
                            className="w-full h-full md:h-[250px] group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                          />
                        </div>
                        <div className="my-3">
                          <div className="flex items-center justify-between gap-3 py-1">
                            <div>
                              <i className="fa-solid fa-user me-2 text-[#18377e]"></i>
                              <span>By {news.author}</span>
                            </div>
                            <div>
                              <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                              <span>{news.date}</span>
                            </div>
                          </div>
                          <h1 className="text-2xl font-semibold mt-1">
                            {news.title.slice(0, 20) + "...."}
                          </h1>
                          <p className="text-sm text-gray-500 mb-2">
                            {news.description.slice(0, 25) + "...."}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : listDisplay ? (
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 mt-8 md:mt-12">
                  {filteredNews.map((news, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 shadow-lg rounded-md group gap-5"
                    >
                      <div className="w-[30%] overflow-hidden rounded-md">
                        <img
                          src={news.img}
                          alt=""
                          className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                        />
                      </div>
                      <div className="w-[70%] my-3">
                        <div className="flex items-center justify-start gap-10 py-1">
                          <div>
                            <i className="fa-solid fa-user me-2 text-[#18377e] text-[22px]"></i>
                            <span className="text-lg">By {news.author}</span>
                          </div>
                          <div>
                            <i className="fa-solid fa-calendar-days me-2 text-[#18377e] text-[22px]"></i>
                            <span className="text-lg">{news.date}</span>
                          </div>
                        </div>
                        <h1 className="text-4xl font-semibold mt-1">
                          {news.title.slice(0, 20) + "...."}
                        </h1>
                        <p className="text-lg text-gray-500 my-2">
                          {news.description.slice(0, 150) + "...."}
                        </p>
                        <Link
                          key={news.id}
                          to={{
                            pathname: `/news/${news.title
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`,
                          }}
                          state={{
                            id: news.id,
                          }}
                        >
                          <button className="mt-2 border-2 border-[#18377e] text-[#18377e] hover:bg-[#18377e] hover:text-white px-4 py-2 rounded-md transition-all duration-500">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 md:mt-12">
                  {filteredNews.map((news) => (
                    <Link key={news.id} to={`/news/${news.id}`}>
                      <div className="p-3 shadow-lg rounded-md group ">
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={news.img}
                            alt=""
                            className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                          />
                        </div>
                        <div className="my-3">
                          <div className="flex items-center justify-between gap-3 py-1">
                            <div>
                              <i className="fa-solid fa-user me-2 text-[#18377e]"></i>
                              <span>By {news.author}</span>
                            </div>
                            <div>
                              <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                              <span>{news.date}</span>
                            </div>
                          </div>
                          <h1 className="text-2xl font-semibold mt-1">
                            {news.title.slice(0, 25) + "...."}
                          </h1>
                          <p className="text-sm text-gray-500 mb-2">
                            {news.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )
            ) : (
              <div className="w-full flex flex-col justify-center items-center gap-5 h-[50vh] mt-12">
                <div className="custom-loader"></div>
                <h1 className="text-3xl font-semibold animate-pulse">
                  No news found
                </h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
