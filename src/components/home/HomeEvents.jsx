import React from "react";
import event1 from "../../assets/imgs/evenet-sched-1.jpg";
import event2 from "../../assets/imgs/evenet-sched-2.jpg";
import event3 from "../../assets/imgs/evenet-sched-3.jpg";
import event4 from "../../assets/imgs/evenet-sched-4.jpg";
import { Link } from "react-router-dom";

const HomeEvents = () => {
  const events = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      time: "10:00 AM – 2.00 PM",
      location: "135 W, 46nd Street, New York",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: event1,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      time: "10:00 AM – 2.00 PM",
      location: "135 W, 46nd Street, New York",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: event2,
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      time: "10:00 AM – 2.00 PM",
      location: "135 W, 46nd Street, New York",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: event3,
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      time: "10:00 AM – 2.00 PM",
      location: "135 W, 46nd Street, New York",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: event4,
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet.",
      date: "24, Jan - 2024",
      time: "10:00 AM – 2.00 PM",
      location: "135 W, 46nd Street, New York",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: event1,
    },
    {
      id: 6,
      title: "This is last event",
      date: "24, Jan - 2024",
      time: "10:00 AM – 2.00 PM",
      location: "135 W, 46nd Street, New York",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolor nulla quaerat?",
      img: event2,
    },
  ];

  const revEvents = [...events].reverse();
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
              Events
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-8">
            {revEvents.slice(0, 4).map((event) => (
              <Link key={event.id} to={`/event/${event.id}`}>
                <div className="p-3 shadow-lg rounded-md group flex flex-col md:flex-row md:items-center gap-5">
                  <div className="w-full md:w-1/2 overflow-hidden rounded-md">
                    <img
                      src={event.img}
                      alt={event.title}
                      className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                    />
                  </div>
                  <div className="w-full md:w-2/3 my-2">
                    <div className="flex flex-col gap-3 border-b-2 border-[#18377e] py-2">
                      <div>
                        <i className="fa-solid fa-calendar-days me-2 text-[#98a7c9]"></i>
                        <span>{event.date}</span>
                      </div>
                      <div>
                        <i className="fa-regular fa-clock me-2 text-[#18377e]"></i>
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <h1 className="text-2xl font-semibold mt-1">
                      {event.title.slice(0, 20) + "...."}
                    </h1>
                    <p className="text-sm text-gray-500 mb-2">
                      {event.description}
                    </p>
                    <div>
                      <i className="fa-solid fa-location-dot me-2 text-[#18377e]"></i>
                      <span className="text-gray-500">{event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeEvents;
