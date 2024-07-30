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
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: news1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: news2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: news3,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amett.",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: news4,
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: news1,
    },
    {
      id: 6,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: news2,
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
                              <i class="fa-solid fa-user me-2 text-[#18377e]"></i>
                              <span>By {news.author}</span>
                            </div>
                            <div>
                              <i class="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
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
              ) : listDisplay ? (
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 mt-8 md:mt-12">
                  {filteredNews.map((news) => (
                    <div className="flex items-center p-3 shadow-lg rounded-md group gap-5">
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
                            <i class="fa-solid fa-user me-2 text-[#18377e] text-[22px]"></i>
                            <span className="text-lg">By {news.author}</span>
                          </div>
                          <div>
                            <i class="fa-solid fa-calendar-days me-2 text-[#18377e] text-[22px]"></i>
                            <span className="text-lg">{news.date}</span>
                          </div>
                        </div>
                        <h1 className="text-4xl font-semibold mt-1">
                          {news.title}
                        </h1>
                        <p className="text-lg text-gray-500 my-2">
                          {news.description}
                        </p>
                        <Link key={news.id} to={`/news/${news.id}`}>
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
                              <i class="fa-solid fa-user me-2 text-[#18377e]"></i>
                              <span>By {news.author}</span>
                            </div>
                            <div>
                              <i class="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
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
                <div class="custom-loader"></div>
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
