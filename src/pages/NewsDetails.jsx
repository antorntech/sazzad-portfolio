import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link, useLocation, useParams } from "react-router-dom";

const NewsDetails = () => {
  const location = useLocation();
  const { slug } = useParams();

  // Access the id from location state
  const { id } = location.state || {};

  const news = [
    {
      id: 1,
      title: "Prof Sazzad reappointed as UGC member",
      date: "05, Jun - 2023",
      author: "Admin",
      description:
        "Prof Dr Sazzad Hossain has been appointed as full-time member of University Grant Commission for second term. Ministry of Education issued a notification on Monday extending his tenure for next four year. Dr Hossain now teaches computer science and engineering at University of Liberal Arts Bangladesh (ULAB). He is an advisor to the USA-based company ‘PeopleNTech’. Technology expert Dr Hossain hails from Chattogram. He was born on December 16 in 1968. He studied at Chittagong University of Engineering and Technology (CUET) and Faujdarhat Cadet College. Dr Hossain obtained his doctorate of philosophy degree and masters in computer science from Portland State University in US prior completing bachelor at Moscow Technical University in Russia.",
      img: "/images/blog-5.jpg",
      link: "https://www.daily-sun.com/post/693249",
    },
    {
      id: 2,
      title: "STEAM Education to Prepare Our Students for 4IR and Beyond",
      date: "20, Jul - 2023",
      author: "Admin",
      description:
        "The way we live, work, and study is changing at a rapid pace because of the fourth industrial revolution. For students to be ready for the potential and difficulties of this new era, STEAM education is crucial. There are a few obvious reasons why Bangladesh’s entire educational strategy should centre on the STEAM education method. 'Vision 2041' and 'SMART Bangladesh' concepts call for a cutting-edge and successful educational strategy like STEAM education. What is STEAM education? STEM, a concept coined by scientific administrators at the National Science Foundation (NSF) of the United States in the 2000s, is where STEAM got its start. STEM refers to a field and curriculum that focus on teaching science, technology, engineering, and math. In order to address societal issues and the demands of shifting employment markets, STEM-focused curricula have been expanded to many nations outside of the United States. Programs have been built in nations like Australia, China, France, South Korea, Taiwan, the United Kingdom, and India. Critics of STEM assert that exposure to the many arts helps people make better decisions and exhibit greater creativity and ingenuity. They contend that what makes one successful is not profound knowledge but rather the application of the arts in real-world settings. As a result, competing frameworks like STEAM have entered the conversation. Additionally, the STEAM education approach emphasizes scientific subjects without ignoring the students' humanistic qualities. In other words, technical expertise and a scientifically oriented way of thinking about problems combine with creativity to provide novel ideas that cut across disciplinary boundaries.",
      img: "/images/blog-3.jpg",
      link: "https://www.daily-sun.com/printversion/details/701065",
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
      link: "https://web3.du.ac.bd/webPost/182/249",
    },
  ];

  const singleNews = news.find((news) => news.id === id);

  const recentNews = [...news].reverse().slice(0, 3);

  return (
    <>
      <PageHeader title={slug} />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="col-span-2 w-full">
              <img
                src={`${singleNews?.img}`}
                alt=""
                className="w-full h-[400px] object-cover rounded-md"
              />
              <h1 className="text-2xl md:text-4xl font-bold mt-5">
                {singleNews?.title}
              </h1>
              <div className="flex items-center gap-5 py-2">
                <div>
                  <i className="fa-solid fa-user me-2 text-[#18377e]"></i>
                  <span>{singleNews.author}</span>
                </div>
                <div>
                  <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                  <span>{singleNews.date}</span>
                </div>
              </div>
              <div className="w-full h-[1px] my-2 bg-[#18377e]"></div>
              <p className="text-sm md:text-base text-gray-500 mt-3 text-justify">
                {singleNews?.description}
              </p>
              {singleNews?.link && (
                <a
                  href={singleNews?.link}
                  target="_blank"
                  className="inline-block mt-3 text-sm md:text-base text-blue-500 text-justify underline"
                >
                  Read More
                </a>
              )}
            </div>
            <div className="w-full">
              <h1 className="text-2xl md:text-4xl font-bold">Recent News</h1>
              <div className="w-20 h-1 bg-[#18377e]"></div>
              <div className="grid grid-cols-1 gap-8 mt-5">
                {recentNews.map((item, index) => (
                  <Link
                    key={item._id}
                    to={{
                      pathname: `/news/${item.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`,
                    }}
                    state={{
                      id: item.id,
                    }}
                  >
                    <div key={item.id} className="grid grid-cols-3 gap-5">
                      <div className="col-span-1 w-full">
                        <img
                          src={`${item.img}`}
                          alt=""
                          className="w-full rounded-md"
                        />
                      </div>
                      <div className="col-span-2 w-full">
                        <div className="w-full h-full flex flex-col justify-between">
                          <h1 className="text-md">
                            {item.title.slice(0, 20)}...
                          </h1>
                          <div className="">
                            <p className="text-gray-500">
                              <i className="fa-solid fa-user me-2 text-[#18377e]"></i>
                              {item.author}
                            </p>
                            <p className="text-gray-500">
                              <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                              {item.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetails;
