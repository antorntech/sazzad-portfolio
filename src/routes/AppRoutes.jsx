import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ScrlTopOfPage from "../components/scrlTopOfPage/ScrlTopOfPage";
import BlogDetails from "../pages/BlogDetails";
import Blogs from "../pages/Blogs";
import AnimatedCursor from "../components/AnimatedCursor/AnimatedCursor";
import UnderConstruction from "../pages/UnderConstruction";
import Events from "../pages/Events";
import News from "../pages/News";
import EventDetails from "../pages/EventDetails";
import NewsDetails from "../pages/NewsDetails";

const AppRoutes = () => {
  return (
    <>
      <ScrlTopOfPage />
      <AnimatedCursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:slug" element={<EventDetails />} />
        <Route path="/news/:slug" element={<NewsDetails />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<SingleProject />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:service" element={<SingleServices />} />
        <Route path="/blog/:id" element={<BlogDetails />} /> */}
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
