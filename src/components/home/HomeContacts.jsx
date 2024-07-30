import React from "react";
import { Link } from "react-router-dom";
import { ContactForm } from "../contactform/ContactForm";

const HomeContacts = () => {
  return (
    <>
      <section
        className="py-6 md:py-[50px] lg:py-[100px]"
        data-aos="fade-in"
        data-aos-duration="3000"
      >
        <div className="w-full h-full grid max-w-screen-xl px-4 py-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-md">
              <div>
                <h1 className="text-black text-2xl md:text-5xl font-bold pb-2">
                  Let’s work together!
                </h1>
                <p className="text-gray-500 w-full mb-5">
                  I design and code beautifully simple things and i love what i
                  do. Just simple like that!
                </p>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
            <div className="mx-auto flex flex-col justify-center items-start gap-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex justify-center items-center bg-[#18377e] p-5 rounded-full">
                  <i className="fa-solid fa-phone text-white text-2xl"></i>
                </div>
                <div className="text-black">
                  <p>Phone</p>
                  <h2 className="text-md md:text-xl font-semibold">
                    +880 1555 555 555
                  </h2>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex justify-center items-center bg-[#18377e] p-5 rounded-full">
                  <i className="fa-regular fa-envelope text-white text-2xl"></i>
                </div>
                <div className="text-black">
                  <p>Email</p>
                  <h2 className="text-md md:text-xl font-semibold">
                    sazzadhossain@gmail.com
                  </h2>
                </div>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 flex justify-center items-center bg-[#18377e] p-5 rounded-full">
                  <i className="fa-solid fa-location-dot text-white text-2xl"></i>
                </div>
                <div className="text-black">
                  <p>Address</p>
                  <h2 className="text-md md:text-xl font-semibold">
                    Dhanmondi 32, Shukrabad <br />
                    Dhaka, Bangladesh
                  </h2>
                </div>
              </div>
              <div className="w-full mx-auto rounded-xl border-2 border-gray-600 p-5">
                <div className="text-center mb-8">
                  <h1 className="text-black text-2xl md:text-6xl font-bold">
                    Let's Connect
                  </h1>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-5">
                  <Link to="https://www.facebook.com" target="_blank">
                    <div className="w-full md:w-[120px] border-[2px] border-[#18377e] rounded-md hover:bg-[#18377e] transition-all duration-300 px-4 py-2 flex items-center justify-center gap-2 text-gray-500 hover:text-white">
                      <i className="fa-brands fa-facebook text-xl text-[#4AF3E3]"></i>
                      <span className="text-sm">Facebook</span>
                    </div>
                  </Link>
                  <Link to="https://www.linkedin.com/in/sazzad" target="_blank">
                    <div className="w-full md:w-[120px] border-[2px] border-[#18377e] rounded-md hover:bg-[#18377e] transition-all duration-300 px-4 py-2 flex items-center justify-center gap-2 text-gray-500 hover:text-white">
                      <i className="fa-brands fa-linkedin text-xl text-[#4ac9fc]"></i>
                      <span className="text-sm">Linkedin</span>
                    </div>
                  </Link>
                  <Link to="https://www.instagram.com/sazzad" target="_blank">
                    <div className="w-full md:w-[120px] border-[2px] border-[#18377e] rounded-md hover:bg-[#18377e] transition-all duration-300 px-4 py-2 flex items-center justify-center gap-2 text-gray-500 hover:text-white">
                      <i className="fa-brands fa-instagram text-xl text-[#b22ace]"></i>
                      <span className="text-sm">Instagram</span>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContacts;
