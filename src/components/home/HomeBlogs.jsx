import React from "react";
import blog1 from "../../assets/imgs/evenet-sched-1.jpg";
import blog2 from "../../assets/imgs/evenet-sched-2.jpg";
import blog3 from "../../assets/imgs/evenet-sched-3.jpg";
import { Link } from "react-router-dom";

const HomeBlogs = () => {
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
              Blogs
            </h1>
            <div
              className="w-20 h-1 bg-[#18377e] my-1"
              data-aos="fade-right"
              data-aos-duration="1500"
            ></div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
              Quae, tempore doloribus!
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8">
            <div className="p-3 shadow-lg rounded-md group ">
              <div className="overflow-hidden rounded-md">
                <img
                  src={blog1}
                  alt=""
                  className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                />
              </div>
              <div className="my-3">
                <h1 className="text-2xl font-semibold mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <Link to={`/blog/1`}>
                  <button className="text-[#18377e] mt-2 hover:text-[#d64734] transition-all duration-500">
                    Read More <i class="fa-solid fa-angle-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-3 shadow-lg rounded-md group ">
              <div className="overflow-hidden rounded-md">
                <img
                  src={blog2}
                  alt=""
                  className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                />
              </div>
              <div className="my-3">
                <h1 className="text-2xl font-semibold mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <Link to={`/blog/1`}>
                  <button className="text-[#18377e] mt-2 hover:text-[#d64734] transition-all duration-500">
                    Read More <i class="fa-solid fa-angle-right"></i>
                  </button>
                </Link>
              </div>
            </div>
            <div className="p-3 shadow-lg rounded-md group ">
              <div className="overflow-hidden rounded-md">
                <img
                  src={blog3}
                  alt=""
                  className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                />
              </div>
              <div className="my-3">
                <h1 className="text-2xl font-semibold mt-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </h1>
                <Link to={`/blog/1`}>
                  <button className="text-[#18377e] mt-2 hover:text-[#d64734] transition-all duration-500">
                    Read More <i class="fa-solid fa-angle-right"></i>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBlogs;
