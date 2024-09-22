import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="py-6 md:py-[50px] lg:py-[80px]  bg-[#181818]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <img src="/images/sazzad-logo.png" alt="" className="mb-6 w-72" />
            {/* <h1 className="text-2xl text-[#fff] uppercase font-bold mb-6">
              SA<span className="text-[#d64734]">ZZ</span>AD
            </h1> */}
            <ul className="flex flex-wrap justify-center items-center gap-3 md:gap-12">
              <li>
                <Link
                  to="/"
                  className="text-[#fff] text-[17px] font-semibold hover:text-[#18377e] transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#fff] text-[17px] font-semibold hover:text-[#18377e] transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-[#fff] text-[17px] font-semibold hover:text-[#18377e] transition-all duration-300"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-[#fff] text-[17px] font-semibold hover:text-[#18377e] transition-all duration-300"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-[#fff] text-[17px] font-semibold hover:text-[#18377e] transition-all duration-300"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#fff] text-[17px] font-semibold hover:text-[#18377e] transition-all duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <p className="text-gray-500 mt-8">
              © 2024 All Rights Reserved by PEOPLENTECH
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
