import React, { useEffect } from "react";
import "./AnimatedCursor.css";

const AnimatedCursor = () => {
  useEffect(() => {
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.addEventListener("mousemove", (e) => {
      cursor.style.cssText = cursor2.style.cssText =
        "left: " + e.clientX + "px; top: " + e.clientY + "px;";
    });
  });
  return (
    <>
      <div className="cursor hidden md:block" />
      <div className="cursor2 hidden md:block" />
    </>
  );
};

export default AnimatedCursor;
