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
      title: "সূর্যসন্তানদের ত্যাগে বাংলাদেশের সৌধ গড়ার দিন",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "আমরা প্রতিবছর ১৪ ডিসেম্বর শহিদ বুদ্ধিজীবী দিবস শ্রদ্ধার সঙ্গে পালন করি। ১৯৭১ সালের মহান মুক্তিযুদ্ধে পাকিস্তানি হানাদার বাহিনী যে নির্মম হত্যাকাণ্ড চালিয়েছিল তার উল্লেখযোগ্য একটি উদাহরণ হলো বুদ্ধিজীবীদের হত্যাকাণ্ড। ১৯৭১ সালের ১৪ ডিসেম্বর পরিকল্পিত হত্যাকাণ্ড চালানোর মধ্য দিয়ে জাতির শ্রেষ্ঠ সন্তানদের হত্যা করে পাকিস্তানি হায়েনারা। দীর্ঘ নয় মাস রক্তক্ষয়ী যুদ্ধের মাধ্যমে বাংলাদেশ স্বাধীনতা অর্জন করে। মুক্তিযুদ্ধের শুরু থেকেই পাকিস্তানি বাহিনীদের প্রধান শিকার ছিলেন এদেশের প্রতিথযশা শিক্ষাবিদ, চিকিৎসক, সাহিত্যিক, সাংবাদিকসহ প্রথম শ্রেণির মানুষগুলো। আর এই হত্যাকাণ্ড প্রকটরূপ ধারণ করে ১০-১৪ ডিসেম্বর এবং ১৪ ডিসেম্বরের সেই ভয়াবহতা সত্যিই মর্মান্তিক ছিল। শহিদ বুদ্ধিজীবীদের অভাব জাতি এখনও অনুভব করে চলেছে। তাদের অবদান ভুলবার নয়। বাঙালি জাতিকে মেধাশূন্য করতে পাকিস্তানি হানাদার বাহিনী ও দেশীয় আলবদর, রাজাকাররা মিলে পরিকল্পিত এ হত্যাকাণ্ড সংঘটিত করে। মুক্তিযুদ্ধে বুদ্ধিজীবীদের অবদান ছিল অসামান্য। তাদের অনুপ্রেরণা এবং উত্সাহে মহান মুক্তিযুদ্ধ প্রথম থেকে শেষ পর্যন্ত পরিচালিত হয়েছে। মুক্তিযুদ্ধের সময় দেশের অসংখ্য লেখক, সাংবাদিক, শিল্পী, চিকিত্সক, শিক্ষক তাদের অক্লান্ত পরিশ্রমের মাধ্যমে মুক্তিযুদ্ধকে অগ্রগামী করেছেন। মুক্তিযুদ্ধের মূল নিয়ামক শক্তি ছিল জনগণ, তথাপি মানুষকে যুদ্ধে উদ্বুদ্ধ করার ক্ষেত্রে বুদ্ধিজীবীদের অবদান ছিল খুবই প্রশংসনীয়। পত্রপত্রিকায় লেখালেখি, স্বাধীন বাংলা বেতার কেন্দ্রে খবর পাঠ, দেশাত্মবোধক গান, মুক্তিযুদ্ধভিত্তিক গান, কবিতা পাঠ, নাটক, কথিত ও অত্যন্ত জনপ্রিয় অনুষ্ঠানগুলো বুদ্ধিজীবীরাই পরিচালনা করেন। বুদ্ধিজীবীরা রণক্ষেত্রে মুক্তিযোদ্ধাদের মানসিক, নৈতিক মনোবল ধরে রাখতে সহায়তা, সাহস জোগানো এবং জনগণকে শত্রুর বিরুদ্ধে দুর্দমনীয় করতে গুরুত্বপূর্ণ ভূমিকা পালন করেছেন। এক কথায় যদি বলা হয় মুক্তিযুদ্ধের দিকনির্দেশক কারা ছিলেন? বঙ্গবন্ধুর নেতৃত্বে বুদ্ধিজীবীরা ছিলেন অগ্রভাগে, সেটাই হবে উত্তম উত্তর। অন্যদিকে স্বাধীনতা আন্দোলনে রাজনৈতিক ব্যক্তিবর্গের অবদান অতুলনীয়। রাজনৈতিক দলের নেতৃত্বে বাংলাদেশ স্বাধীনতা অর্জন করে। মহান মুক্তিযুদ্ধে বুদ্ধিজীবী ও অন্যান্য বাঙালিদের অক্লান্ত পরিশ্রম ও জীবনের বিনিময়ে বাঙালি বিজয়ের দ্বারপ্রান্তে এসে যখন উপস্থিত তখন পাকিস্তানের গভর্নরের সামরিক উপদেষ্টা মেজর জেনারেল রাও ফরমান আলি এক সুদূরপ্রসারী কুপরিকল্পনা গ্রহণ করেন। তিনি এদেশের শ্রেষ্ঠ মানুষদের নিঃশেষ করে বাঙালি জাতিকে মেধাশূন্য করার এক নীলনকশা আঁকেন।",
      img: "/images/blog-1.jpg",
    },
    {
      id: 2,
      title:
        "করোনাভাইরাস মহামারীর সাধারণ ছুটিতে বিশ্ববিদ্যালয় পর্যায়ে অনলাইন ক্লাসের যে চর্চা শুরু হয়েছে তা ধরে রাখার উপর জোর দিয়েছেন বিশ্ববিদ্যালয় মঞ্জুরি কমিশনের (ইউজিসি) সদস্য অধ্যাপক ড. মো. সাজ্জাদ হোসেন।",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "বৃহস্পতিবার চট্টগ্রামের বেসরকারি ইস্ট ডেল্টা ইউনিভার্সিটি (ইডিইউ) পরিদর্শনে এসে তিনি একথা বলেন। সাজ্জাদ হোসেন বলেন, “অনলাইন ক্লাসের মাধ্যমে প্রযুক্তিগত উৎকর্ষ ও শিক্ষার ধারাবাহিকতা অব্যাহত রাখতে বেসরকারি বিশ্ববিদ্যালয়গুলো অগ্রণী ভূমিকা রেখেছে। সরাসরি ক্লাসের পাশাপাশি অনলাইনের এই চর্চা ধরে রাখতে হবে এবং এ লক্ষ্যে ইউজিসি সর্বাত্মক সহযোগিতা করবে।” অনুষ্ঠানে সভাপতির বক্তব্যে ইডিইউ উপাচার্য মু. সিকান্দার খান বলেন, “মহামারীতে অনলাইন ক্লাসের অনুমতি প্রদান করে যুগোপযোগী ভূমিকা রেখেছে ইউজিসি। এতে বাংলাদেশের শিক্ষা কার্যক্রম স্থবিরতা ও পিছিয়ে পড়া থেকে রক্ষা পেয়েছে।” প্রধান বক্তা ইডিইউ’র প্রতিষ্ঠাতা ভাইস চেয়ারম্যান সাঈদ আল নোমান বলেন, “নতুন বিভাগ অনুমোদনের ক্ষেত্রে মানসম্মত বিশ্ববিদ্যালয়গুলোকে অগ্রাধিকার দেওয়া হলে সারাদেশে শিক্ষার গুণগত মান নিশ্চিত হবে। এক্ষেত্রে নীতিমালা গ্রহণে বেসরকারি বিশ্ববিদ্যালয়গুলোকে মান অনুসারে শ্রেণি বিভক্ত করা যেতে পারে।”",
      img: "/images/blog-2.jpg",
    },
    {
      id: 3,
      title: "অদৃশ্য শক্তি পরাভূত করতে প্রয়োজন গবেষণা ও আধুনিক প্রযুক্তি",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "এই বছরটি বঙ্গবন্ধুর জন্মশতবার্ষিকী। তাঁর নেতৃত্বে আমরা বাংলাদেশের স্বাধীনতা অর্জন করেছি। এখানে বিশেষভাবে উল্লেখ্য যে বছরটির শুরু থেকেই আমরা বিশ্বজুড়ে একটি দুর্যোগ মোকাবিলায় আছি। করোনাভাইরাস মহামারিতে বাংলাদেশসহ বিশ্বের ১৮৫টি দেশ পর্যদুস্ত। দেশের এ দুর্যোগ মোকাবিলায় প্রধানমন্ত্রী শেখ হাসিনা নেতৃত্ব দিচ্ছেন। তিনি নিরলসভাবে পরিশ্রম করছেন। আমরা সবাই ঐক্যবদ্ধভাবে কাজ করে যাচ্ছি। একাত্তরে বঙ্গবন্ধু শেখ মুজিবুর রহমানের নেতৃত্বে আমরা যেভাবে স্বাধীনতা অর্জন করেছি, আমি দৃঢ়ভাবে বিশ্বাস করি, এবারও বঙ্গবন্ধুকন্যার নেতৃত্বে আমরা সেভাবে এই বৈশ্বিক মহামারি করোনাভাইরাস মোকাবিলা করবো। আমি সুনিশ্চিত আমরা এর থেকে অচিরেই পরিত্রাণ পেয়ে আরও ভালোভাবে এগিয়ে যাবো। এ প্রসঙ্গে রবীন্দ্রনাথ ঠাকুর এর আরোগ্য কাব্যগ্রন্থের “এ দ্যুলোক মধুময়, মধুময় পৃথিবীর ধূলি” কবিতার একটি লাইন মনে পড়ছে – “দেখেছি নিত্যের জ্যোতি দুর্যোগের মায়ার আড়ালে” করোনাভাইরাসের প্রাদুর্ভাব গত দশকে অর্জিত আমাদের অভাবনীয় অর্থনৈতিক প্রবৃদ্ধিকে দুর্বল করে যাতে না দিতে পারে সে লক্ষ্যে কাজ করছে সরকারের আইসিটি মন্ত্রণালয়ও। উন্নয়নশীল ডিজিটাল বাংলাদেশে এ যেন আরেকটি যুদ্ধ। আমরা জানি এই ডিজিটাল বাংলাদেশের রূপকার বঙ্গবন্ধুর দৌহিত্র সজীব ওয়াজেদ জয়। তার পরিকল্পনায় এদেশ এগিয়ে যাচ্ছে। প্রধানমন্ত্রী শেখ হাসিনা প্রথম থেকেই এদেশকে আধুনিক বাংলাদেশ হিসেবে গড়ে তোলার জন্য একটি ফ্রেমওয়ার্ক দিয়েছেন। যেটি হচ্ছে- ভিশন ২০২১, ২০৩০, ২০৪১ (উন্নত বাংলাদেশ) এবং ২০৭১। ২০৭১ সালে আমরা স্বাধীনতার একশত বছর পালন করবো। আমাদের রয়েছে শতবর্ষব্যাপী ডেল্টা প্ল্যান। এই ফ্রেমওয়ার্ক বাস্তবায়নে আমাদের কাজ করতে হবে। আমরা সবাই একতাবদ্ধও এ ফ্রেমওয়ার্ক বাস্তবায়নে। বর্তমানে দেশে যে দুর্যোগটি ছড়িয়ে পড়েছে তা মোকাবিলায় প্রথম সারিতে রয়েছেন চিকিৎসকরা। আমরা প্রথমেই কৃতজ্ঞতা জানাচ্ছি তাদের প্রতি। সবার আগে এগিয়ে এসেছেন স্বাস্থ্যকর্মীরা। সঙ্গে সঙ্গে পুলিশ বাহিনী, সশস্ত্র বাহিনী, সিটি করপোরেশন, স্বাস্থ্য মন্ত্রণালয়, আইসিটি মন্ত্রণালয়, এবং বিশ্ববিদ্যালয়গুলো এই দুর্যাগ মোকাবিলায় নিরলস চেষ্টা চালিয়ে যাচ্ছেন। তাদের প্রতিও কৃতজ্ঞতা।",
      img: "/images/blog-3.jpg",
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
