import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";

const Blogs = () => {
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

  const blogs = [
    {
      id: 1,
      title: "আধুনিকতার সুযোগ পাচ্ছে বাংলাদেশ",
      date: "24, Jan - 2024",
      author: "Admin",
      description:
        "বাংলাদেশ, দক্ষিণ এশিয়ার একটি উদীয়মান দেশ, সাম্প্রতিক বছরগুলোতে বিভিন্ন ক্ষেত্রে আধুনিকতার ছোঁয়া পেয়েছে। প্রযুক্তির উন্নয়ন, অবকাঠামোগত অগ্রগতি, এবং বৈশ্বিক অর্থনীতিতে একীভূত হওয়ার ফলে দেশটি এখন আধুনিকতার নতুন দিগন্তে প্রবেশ করছে। বিভিন্ন খাতের এই অগ্রগতি বাংলাদেশের জনগণকে নতুন সম্ভাবনা এবং সুযোগের সামনে নিয়ে আসছে। বাংলাদেশে প্রযুক্তির বিস্তারের ফলে দেশটির আর্থিক ও সামাজিক ক্ষেত্র উল্লেখযোগ্য পরিবর্তনের মধ্য দিয়ে যাচ্ছে। মোবাইল ব্যাংকিং, ই-কমার্স, এবং ফিনটেক সেবার মাধ্যমে গ্রাম থেকে শহর পর্যন্ত আর্থিক লেনদেন সহজতর হয়েছে। এক সময় যেখানে অর্থনৈতিক লেনদেনের জন্য মানুষের ব্যাংকে যাওয়া বাধ্যতামূলক ছিল, সেখানে এখন মোবাইল ফোনের মাধ্যমেই এসব কাজ সারা সম্ভব হচ্ছে। ইন্টারনেটের সহজলভ্যতা এবং ফাইবার অপটিক সংযোগের সম্প্রসারণ বাংলাদেশের তরুণ প্রজন্মকে বৈশ্বিক তথ্যপ্রবাহের সঙ্গে যুক্ত করেছে। এডুটেক, হেলথটেক, এবং স্টার্টআপ সংস্কৃতির বিকাশ প্রযুক্তির এই অগ্রগতির ফলে আরও ত্বরান্বিত হচ্ছে। তথ্যপ্রযুক্তি খাতে দক্ষ জনশক্তি তৈরি এবং আন্তর্জাতিক বাজারে প্রতিযোগিতা করার সুযোগও বাংলাদেশ পাচ্ছে। বাংলাদেশের অবকাঠামোগত উন্নয়নও আধুনিকতার অন্যতম বড় প্রতিফলন। পদ্মা সেতু, মেট্রোরেল, এবং কর্ণফুলী টানেল প্রকল্পের মতো বৃহৎ অবকাঠামোগত উন্নয়নগুলো দেশের যোগাযোগ ব্যবস্থায় আমূল পরিবর্তন এনেছে। এ ধরনের প্রকল্পগুলো দেশের অর্থনীতিতে ব্যাপক ইতিবাচক প্রভাব ফেলছে। নতুন সড়ক, সেতু, এবং রেলপথের মাধ্যমে গ্রামীণ অঞ্চলগুলোও এখন শহরের সঙ্গে সহজে সংযুক্ত হচ্ছে, যা অর্থনৈতিক কর্মকাণ্ডকে ত্বরান্বিত করছে।",
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
        "বিশ্ব দ্রুত বদলাচ্ছে, আর সেই পরিবর্তনের সঙ্গে তাল মিলিয়ে বৈজ্ঞানিক গবেষণা ও প্রযুক্তির গুরুত্ব দিন দিন বাড়ছে। অতীতের মানুষের জন্য অনেক কিছুই ছিল কল্পনা, যেগুলো আজকে বাস্তবতায় রূপান্তরিত হয়েছে শুধুমাত্র গবেষণা ও আধুনিক প্রযুক্তির কারণে। তবে আমরা এখনো এমন অনেক অদৃশ্য শক্তির সম্মুখীন, যেগুলোকে আমরা পুরোপুরি বুঝতে পারিনি বা জয় করতে পারিনি। এই অদৃশ্য শক্তিগুলোর মোকাবিলা করতে গবেষণা এবং আধুনিক প্রযুক্তিই একমাত্র সমাধান। অদৃশ্য শক্তি: রহস্য ও বাস্তবতা অদৃশ্য শক্তি বলতে সাধারণত এমন কিছু বোঝানো হয় যা আমাদের পাঁচটি ইন্দ্রিয়ের বাইরে থেকে আমাদের ওপর প্রভাব ফেলছে। যেমন, গাণিতিক ধাঁধা, মহাকাশের রহস্য, বা ক্ষুদ্রাতিক্ষুদ্র কোষের গতিবিধি—এসবই কোনো না কোনোভাবে আমাদের দৃষ্টির বাইরে থেকে কাজ করছে। তবে বিজ্ঞানীরা জানেন, এই অদৃশ্য শক্তিগুলো বাস্তব এবং এদের প্রভাব গুরুত্বপূর্ণ। আমরা যদি এই শক্তিগুলোকে সঠিকভাবে বিশ্লেষণ করতে পারি, তাহলে মানবজাতির জন্য নতুন সম্ভাবনার দ্বার খুলবে। গবেষণার গুরুত্ব গবেষণা ছাড়া আমরা এই অদৃশ্য শক্তিগুলোর প্রকৃতি বুঝতে পারব না। বৈজ্ঞানিক গবেষণার মাধ্যমে আমরা বিভিন্ন স্তরে প্রাকৃতিক এবং সামাজিক সমস্যার সমাধান করতে পারি। উদাহরণস্বরূপ, কোয়ান্টাম ফিজিক্সের গবেষণা আমাদের পৃথিবী এবং মহাবিশ্বের গঠন সম্পর্কে নতুন ধারণা দিয়েছে। চিকিৎসাবিজ্ঞানে গবেষণা ভাইরাস এবং রোগের অদৃশ্য শক্তিকে প্রতিহত করার উপায় উদ্ভাবন করেছে। যতই গবেষণা গভীরে গিয়েছে, ততই আমাদের কাছে নতুন নতুন প্রযুক্তির পথ খুলেছে। যেমন, ডিএনএ বিশ্লেষণের মাধ্যমে আমরা বুঝতে পেরেছি কীভাবে মানবদেহের গঠন কাজ করে, এবং এই গবেষণা আধুনিক চিকিৎসা ক্ষেত্রে বিপ্লব ঘটিয়েছে।",
      img: "/images/blog-3.jpg",
    },
  ];

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery) ||
      blog.description.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <PageHeader title="Blogs" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="w-full flex justify-between items-center">
            <div className="w-full">
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search Blogs . . ."
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
            {filteredBlogs.length > 0 ? (
              gridDisplay ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 md:mt-12">
                  {filteredBlogs.map((blog) => (
                    <Link
                      key={blog.id}
                      to={{
                        pathname: `/blog/${blog.title
                          .replace(/\s+/g, "-")
                          .toLowerCase()}`,
                      }}
                      state={{
                        id: blog.id,
                      }}
                    >
                      <div className="p-3 shadow-lg rounded-md group ">
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={blog.img}
                            alt=""
                            className="w-full h-full md:h-[250px] group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                          />
                        </div>
                        <div className="my-3">
                          <div className="flex items-center justify-between gap-3 py-1">
                            <div>
                              <i className="fa-solid fa-user me-2 text-[#18377e]"></i>
                              <span>By {blog.author}</span>
                            </div>
                            <div>
                              <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                              <span>{blog.date}</span>
                            </div>
                          </div>
                          <h1 className="text-2xl font-semibold mt-1">
                            {blog.title.slice(0, 20) + "...."}
                          </h1>
                          <p className="text-sm text-gray-500 mb-2">
                            {blog.description.slice(0, 25) + "...."}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : listDisplay ? (
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 mt-8 md:mt-12">
                  {filteredBlogs.map((blog) => (
                    <div className="flex items-center p-3 shadow-lg rounded-md group gap-5">
                      <div className="w-[30%] overflow-hidden rounded-md">
                        <img
                          src={blog.img}
                          alt=""
                          className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                        />
                      </div>
                      <div className="w-[70%] my-3">
                        <div className="flex items-center justify-start gap-10 py-1">
                          <div>
                            <i className="fa-solid fa-user me-2 text-[#18377e] text-[22px]"></i>
                            <span className="text-lg">By {blog.author}</span>
                          </div>
                          <div>
                            <i className="fa-solid fa-calendar-days me-2 text-[#18377e] text-[22px]"></i>
                            <span className="text-lg">{blog.date}</span>
                          </div>
                        </div>
                        <h1 className="text-4xl font-semibold mt-1">
                          {blog.title.slice(0, 30) + "...."}
                        </h1>
                        <p className="text-lg text-gray-500 my-2">
                          {blog.description.slice(0, 150) + "...."}
                        </p>
                        <Link
                          key={blog.id}
                          to={{
                            pathname: `/blog/${blog.title
                              .replace(/\s+/g, "-")
                              .toLowerCase()}`,
                          }}
                          state={{
                            id: blog.id,
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
                  {filteredBlogs.map((blog) => (
                    <Link key={blog.id} to={`/blog/${blog.id}`}>
                      <div className="p-3 shadow-lg rounded-md group ">
                        <div className="overflow-hidden rounded-md">
                          <img
                            src={blog.img}
                            alt=""
                            className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                          />
                        </div>
                        <div className="my-3">
                          <div className="flex items-center justify-between gap-3 py-1">
                            <div>
                              <i className="fa-solid fa-user me-2 text-[#18377e]"></i>
                              <span>By {blog.author}</span>
                            </div>
                            <div>
                              <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                              <span>{blog.date}</span>
                            </div>
                          </div>
                          <h1 className="text-2xl font-semibold mt-1">
                            {blog.title.slice(0, 25) + "...."}
                          </h1>
                          <p className="text-sm text-gray-500 mb-2">
                            {blog.description}
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
                  No blog found
                </h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
