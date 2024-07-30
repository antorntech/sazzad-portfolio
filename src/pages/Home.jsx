import React from "react";
import HomeContacts from "../components/home2/HomeContacts";
import HomeEvents from "../components/home2/HomeEvents";
import HomeSlider from "../components/home2/HomeSlider";
import HomeAbout from "../components/home2/HomeAbout";
import HomeNews from "../components/home2/HomeNews";
import HomeTask from "../components/home2/HomeTask";
import HomeGallery from "../components/home2/HomeGallery";
import HomeBlogs from "../components/home2/HomeBlogs";
import HomeAchievement from "../components/home2/HomeAchievement";
import HomeMoto from "../components/home2/HomeMoto";

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
