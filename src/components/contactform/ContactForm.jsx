import React, { useState } from "react";
import { toast } from "react-toastify";

export const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setContactDetails({
      ...contactDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactDetails);
    // fetch("https://api.designerarif.com/api/v1/contact/add", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(contactDetails),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data?.status === "success") {
    //       toast.success("Message sent successfully");
    //     } else {
    //       toast.error("Something went wrong");
    //     }
    //   });

    setContactDetails({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="w-full flex flex-col md:flex-row items-center gap-5">
          <input
            className="w-full p-3 rounded-md bg-gray-100 border-b-[1px] border-gray-500 text-white focus:outline-none focus:border-[#18377e] focus:ring-1 focus:ring-[#18377e]"
            type="text"
            name="firstname"
            value={contactDetails.firstname}
            onChange={handleChange}
            required
            placeholder="First Name"
          />
          <input
            className="w-full p-3 rounded-md bg-gray-100 border-b-[1px] border-gray-500 text-white focus:outline-none focus:border-[#18377e] focus:ring-1 focus:ring-[#18377e]"
            type="text"
            name="lastname"
            value={contactDetails.lastname}
            onChange={handleChange}
            required
            placeholder="Last Name"
          />
        </div>
        <div className="w-full mt-5 flex flex-col md:flex-row items-center gap-5">
          <input
            className="w-full mt-3 p-3 rounded-md bg-gray-100 border-b-[1px] border-gray-500 text-white focus:outline-none focus:border-[#18377e] focus:ring-1 focus:ring-[#18377e]"
            type="text"
            name="email"
            value={contactDetails.email}
            onChange={handleChange}
            required
            placeholder="Email Address"
          />
          <input
            className="w-full mt-3 p-3 rounded-md bg-gray-100 border-b-[1px] border-gray-500 text-white focus:outline-none focus:border-[#18377e] focus:ring-1 focus:ring-[#18377e]"
            type="text"
            name="phone"
            value={contactDetails.phone}
            onChange={handleChange}
            required
            placeholder="Phone Number"
          />
        </div>
        <div className="w-full mt-5 flex flex-col md:flex-row items-center gap-5">
          <input
            className="w-full p-3 rounded-md bg-gray-100 border-b-[1px] border-gray-500 text-white focus:outline-none focus:border-[#18377e] focus:ring-1 focus:ring-[#18377e]"
            type="text"
            name="subject"
            value={contactDetails.subject}
            onChange={handleChange}
            required
            placeholder="Last Name"
          />
        </div>
        <div className="w-full mt-5 flex flex-col md:flex-row items-center gap-5">
          <textarea
            rows="5"
            className="w-full mt-3 p-3 rounded-md bg-gray-100 border-b-[1px] border-gray-500 text-white focus:outline-none focus:border-[#18377e] focus:ring-1 focus:ring-[#18377e]"
            type="text"
            name="message"
            value={contactDetails.message}
            onChange={handleChange}
            required
            placeholder="Message"
          />
        </div>
        <div className="w-full mt-5 flex  items-center gap-5">
          <button
            type="submit"
            className="border-[2px] border-[#18377e] px-8 py-2 md:py-4 hover:bg-[#18377e] font-semibold rounded-md text-[#18377e] hover:text-white w-full flex justify-center items-center md:w-[250px] gap-2 transition-all duration-300"
          >
            Send Message ➤
          </button>
        </div>
      </form>
    </>
  );
};
