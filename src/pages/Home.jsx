import React from "react";
import HeroSection from "../components/home/HeroSection";
import HomeTaskSection from "../components/home/HomeTaskSection";
import HomeQualityService from "../components/home/HomeQualityService";
import HomeRecentWork from "../components/home/HomeRecentWork";
import HomeExperience from "../components/home/HomeExperience";
import HomeSkills from "../components/home/HomeSkills";
import HomeClientStories from "../components/home/HomeClientStories";
import HomeContacts from "../components/home/HomeContacts";
import HomeRecentBlogs02 from "../components/home/HomeRecentBlogs02";
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
      {/* <HomeTaskSection />
      <HomeQualityService />
      <HomeRecentWork />
      <HomeExperience />
      <HomeSkills />
      <HomeClientStories />
      <HomeRecentBlogs02 />
      <HomeContacts /> */}
    </>
  );
};

export default Home;
