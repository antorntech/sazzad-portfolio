import React from "react";
import PageHeader from "../components/pageheader/PageHeader";
import event1 from "../assets/imgs/evenet-sched-1.jpg";
import event2 from "../assets/imgs/evenet-sched-2.jpg";
import event3 from "../assets/imgs/evenet-sched-3.jpg";
import event4 from "../assets/imgs/evenet-sched-4.jpg";
import { Link } from "react-router-dom";

const Events = () => {
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

  // Filter events based on search query
  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery) ||
      event.description.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <PageHeader title="Events" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="w-full flex justify-between items-center">
            <div className="w-full">
              <div className="relative w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search Event . . ."
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
            {filteredEvents.length > 0 ? (
              gridDisplay ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-8 md:mt-12">
                  {filteredEvents.map((event) => (
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
                              <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
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
                            <span className="text-gray-500">
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : listDisplay ? (
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-12 mt-8 md:mt-12">
                  {filteredEvents.map((event) => (
                    <Link key={event.id} to={`/event/${event.id}`}>
                      <div className="p-3 shadow-lg rounded-md group flex flex-col md:flex-row md:items-center gap-5">
                        <div className="w-full md:w-[30%] overflow-hidden rounded-md">
                          <img
                            src={event.img}
                            alt={event.title}
                            className="w-full h-full group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 rounded-md"
                          />
                        </div>
                        <div className="w-full md:w-[70%] my-2">
                          <div className="flex flex-col gap-3 border-b-2 border-[#18377e] py-4">
                            <div>
                              <i className="fa-solid fa-calendar-days me-2 text-[#18377e] text-[22px]"></i>
                              <span className="text-lg">{event.date}</span>
                            </div>
                            <div>
                              <i className="fa-regular fa-clock me-2 text-[#18377e] text-[22px]"></i>
                              <span className="text-lg">{event.time}</span>
                            </div>
                          </div>
                          <h1 className="text-4xl font-semibold mt-3">
                            {event.title}
                          </h1>
                          <p className="text-lg text-gray-500 mt-2 mb-3">
                            {event.description}
                          </p>
                          <div>
                            <i className="fa-solid fa-location-dot me-2 text-[#18377e] text-[22px]"></i>
                            <span className="text-gray-500 text-lg">
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-8 md:mt-12">
                  {filteredEvents.map((event) => (
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
                              <i className="fa-solid fa-calendar-days me-2 text-[#18377e]"></i>
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
                            <span className="text-gray-500">
                              {event.location}
                            </span>
                          </div>
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
                  No event found
                </h1>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
