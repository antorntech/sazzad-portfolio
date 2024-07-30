import React from "react";
import HomeContacts from "../components/home2/HomeContacts";
import HomeEvents from "../components/home2/HomeEvents";
import HomeSlider from "../components/home2/HomeSlider";
import HomeAbout from "../components/home2/HomeAbout";
import HomeNews from "../components/home2/HomeNews";
import HomeTask from "../components/home2/HomeTask";
import HomeGallery from "../components/home2/HomeGallery";
import HomeBlogs from "../components/home2/HomeBlogs";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeAbout />
      <HomeEvents />
      <HomeTask />
      <HomeNews />
      <HomeGallery />
      <HomeBlogs />
      <HomeContacts />
    </>
  );
};

export default Home;
