import React from "react";
import event1 from "../../assets/imgs/evenet-sched-1.jpg";
import event2 from "../../assets/imgs/evenet-sched-2.jpg";
import event3 from "../../assets/imgs/evenet-sched-3.jpg";
import { Link } from "react-router-dom";

const HomeEvents = () => {
  return (
    <>
      <section
        className="py-6 md:py-[50px] lg:py-[80px]"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <div className="max-w-screen-xl mx-auto px-4 lg:px-0">
          <header>
            <h1 className="text-[#18377e] text-5xl font-bold uppercase">
              Events
            </h1>
            <div className="w-20 h-1 bg-[#18377e] my-1"></div>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />{" "}
              Quae, tempore doloribus!
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-8">
            <Link>
              <div className="p-3 shadow-lg rounded-md group flex flex-col md:flex-row md:items-center gap-5">
                <div className="w-full md:w-1/2 overflow-hidden rounded-md">
                  <img
                    src={event1}
                    alt=""
                    className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 my-2">
                  <div className="flex flex-col  gap-3 border-b-2 border-[#18377e] py-2">
                    <div>
                      <i class="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                      <span>24, Jan - 2024</span>
                    </div>
                    <div>
                      <i class="fa-regular fa-clock me-2 text-[#18377e]"></i>
                      <span>10:00 AM – 2.00 PM</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold mt-1">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <p className="text-sm text-gray-500 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita dolor nulla quaerat?
                  </p>
                  <div>
                    <i class="fa-solid fa-location-dot me-2 text-[#18377e]"></i>
                    <span className="text-gray-500">
                      135 W, 46nd Street, New York
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="p-3 shadow-lg rounded-md group flex flex-col md:flex-row md:items-center gap-5">
                <div className="w-full md:w-1/2 overflow-hidden rounded-md">
                  <img
                    src={event2}
                    alt=""
                    className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 my-2">
                  <div className="flex flex-col  gap-3 border-b-2 border-[#18377e] py-2">
                    <div>
                      <i class="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                      <span>24, Jan - 2024</span>
                    </div>
                    <div>
                      <i class="fa-regular fa-clock me-2 text-[#18377e]"></i>
                      <span>10:00 AM – 2.00 PM</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold mt-1">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <p className="text-sm text-gray-500 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita dolor nulla quaerat?
                  </p>
                  <div>
                    <i class="fa-solid fa-location-dot me-2 text-[#18377e]"></i>
                    <span className="text-gray-500">
                      135 W, 46nd Street, New York
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="p-3 shadow-lg rounded-md group flex flex-col md:flex-row md:items-center gap-5">
                <div className="w-full md:w-1/2 overflow-hidden rounded-md">
                  <img
                    src={event3}
                    alt=""
                    className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 my-2">
                  <div className="flex flex-col  gap-3 border-b-2 border-[#18377e] py-2">
                    <div>
                      <i class="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                      <span>24, Jan - 2024</span>
                    </div>
                    <div>
                      <i class="fa-regular fa-clock me-2 text-[#18377e]"></i>
                      <span>10:00 AM – 2.00 PM</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold mt-1">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <p className="text-sm text-gray-500 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita dolor nulla quaerat?
                  </p>
                  <div>
                    <i class="fa-solid fa-location-dot me-2 text-[#18377e]"></i>
                    <span className="text-gray-500">
                      135 W, 46nd Street, New York
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            <Link>
              <div className="p-3 shadow-lg rounded-md group flex flex-col md:flex-row md:items-center gap-5">
                <div className="w-full md:w-1/2 overflow-hidden rounded-md">
                  <img
                    src={event1}
                    alt=""
                    className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                  />
                </div>
                <div className="w-full md:w-2/3 my-2">
                  <div className="flex flex-col  gap-3 border-b-2 border-[#18377e] py-2">
                    <div>
                      <i class="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
                      <span>24, Jan - 2024</span>
                    </div>
                    <div>
                      <i class="fa-regular fa-clock me-2 text-[#18377e]"></i>
                      <span>10:00 AM – 2.00 PM</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold mt-1">
                    Lorem ipsum dolor sit amet.
                  </h1>
                  <p className="text-sm text-gray-500 mb-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita dolor nulla quaerat?
                  </p>
                  <div>
                    <i class="fa-solid fa-location-dot me-2 text-[#18377e]"></i>
                    <span className="text-gray-500">
                      135 W, 46nd Street, New York
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeEvents;
