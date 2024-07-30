import React from "react";
import HomeContacts from "../components/home/HomeContacts";
import HomeEvents from "../components/home/HomeEvents";
import HomeSlider from "../components/home/HomeSlider";
import HomeAbout from "../components/home/HomeAbout";
import HomeNews from "../components/home/HomeNews";
import HomeTask from "../components/home/HomeTask";
import HomeGallery from "../components/home/HomeGallery";
import HomeBlogs from "../components/home/HomeBlogs";
import HomeAchievement from "../components/home/HomeAchievement";
import HomeMoto from "../components/home/HomeMoto";

const Home = () => {
  return (
    <>
      <HomeSlider />
      <HomeAbout />
      <HomeMoto />
      <HomeEvents />
      <HomeTask />
      <HomeNews />
      <HomeGallery />
      <HomeBlogs />
      <HomeAchievement />
      <HomeContacts />
    </>
  );
};

export default Home;
