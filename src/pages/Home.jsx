import React from "react";
import HomeContacts from "../components/home/HomeContacts";
import HomeEvents from "../components/home/HomeEvents";
import HomeSlider from "../components/home/HomeSlider";
import HomeAbout from "../components/home/HomeAbout";
import HomeNews from "../components/home/HomeNews";
import HomeTask from "../components/home/HomeTask";
import HomeGallery from "../components/home/HomeGallery";
import HomeBlogs from "../components/home/HomeBlogs";
import HomeAssociation from "../components/home/HomeAssociation";
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
      <HomeAssociation />
      <HomeContacts />
    </>
  );
};

export default Home;
