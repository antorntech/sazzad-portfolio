import React, { useState } from "react";
import PageHeader from "../components/pageheader/PageHeader";
import { Link } from "react-router-dom";
import { ContactForm } from "../components/contactform/ContactForm";

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact" />
      <section className="py-6 md:py-[50px] lg:py-[100px]">
        <div className="w-full h-full max-w-screen-xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 bg-gray-100 p-3 md:p-8">
            <div className="w-full h-full md:w-1/2">
              <h1 className="text-black text-2xl md:text-5xl font-bold pb-2">
                Let’s work together!
              </h1>
              <p className="text-gray-500 w-full mb-5">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!
              </p>
              <ContactForm />
            </div>
            <div className="w-full h-full md:w-1/2 mx-auto md:flex flex-col justify-center items-start gap-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49930342496!2d90.25487380236962!3d23.78106723833492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1722327623119!5m2!1sen!2sbd"
                className="w-full"
                height="600"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex flex-col md:flex-row justify-center items-center">
              <div className="w-full flex flex-col items-center p-8 gap-5 hover:bg-gray-100 hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 flex justify-center items-center bg-[#18377e] p-12 rounded-full">
                  <i className="fa-solid fa-phone text-white text-5xl"></i>
                </div>
                <h2 className="text-md text-gray-500 text-center">
                  <span className="font-semibold">Phone:</span> +880 1555 555
                  555
                </h2>
              </div>
              <div className="w-full flex flex-col items-center p-8 gap-5 hover:bg-gray-100 hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 flex justify-center items-center bg-[#18377e] p-12 rounded-full">
                  <i className="fa-regular fa-envelope text-white text-5xl"></i>
                </div>
                <h2 className="text-md text-gray-500 text-center">
                  <span className="font-semibold">Email:</span>{" "}
                  sazzadhossain@gmail.com
                </h2>
              </div>
              <div className="w-full flex flex-col items-center p-8 gap-5 hover:bg-gray-100 hover:shadow-lg transition-all duration-500">
                <div className="w-12 h-12 flex justify-center items-center bg-[#18377e] p-12 rounded-full">
                  <i className="fa-solid fa-location-dot text-white text-5xl"></i>
                </div>
                <h2 className="text-md text-gray-500 text-center">
                  <span className="font-semibold">Address:</span> Dhanmondi 32,
                  Shukrabad, Dhaka,
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
