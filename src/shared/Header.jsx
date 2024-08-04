import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rotateIcon, setRotateIcon] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  // Add the 'scrolled' class to the header when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      // Add the 'scrolled' class to the header when scrolling down
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        // Remove the 'scrolled' class when at the top
        setScrolled(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const user = localStorage.getItem("user");

  const myMenu = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Events",
      path: "/events",
    },
    {
      label: "News",
      path: "/news",
    },
    {
      label: "Blogs",
      path: "/blogs",
    },

    {
      label: "Contact",
      path: "/contact",
    },
  ];

  // signout function
  const signOut = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <>
      {/* desktop menu */}

      <div
        className={`hidden w-full px-5 py-5 md:flex items-center gap-3 fixed left-0 right-0 z-50 ${
          scrolled
            ? "header-shadow z-40 bg-[#18377e] top-0 transition-bg duration-300 py-2 shadow-md"
            : ""
        }`}
      >
        <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center gap-3">
          <div>
            <Link to="/">
              <img src="/images/sazzad-logo.png" alt="logo" />
              {/* <h1 className="text-2xl uppercase font-bold text-white">
                SA<span className="text-[#d64734]">ZZ</span>AD
              </h1> */}
            </Link>
          </div>
          <div className="flex items-center gap-8">
            {myMenu.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-white underline transition-all duration-500 text-[18px]"
                    : scrolled
                    ? "text-white text-[18px]"
                    : "text-white text-[18px]"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden w-full px-5 py-2 fixed left-0 right-0 z-50 ${
          scrolled
            ? "header-shadow z-40 bg-[#18377e] top-0 transition-bg duration-300 py-2 shadow-md"
            : ""
        }`}
      >
        <div className="py-2 flex items-center justify-between shadow-sm">
          <div>
            <Link to="/">
              <img src="/images/sazzad-logo.png" alt="logo" />
              {/* <h1
                className={`text-2xl uppercase font-bold text-white ${
                  scrolled ? "text-white" : ""
                }`}
              >
                SA<span className="text-[#d64734]">ZZ</span>AD
              </h1> */}
            </Link>
          </div>
          <div>
            {/* <i
              className={`fa-solid transition-all ease-out duration-500 ${
                menuOpen ? "fa-xmark" : "fa-bars"
              }  text-[30px] text-white`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              =
            </i> */}
            <div className="size-8 flex justify-center items-center border-2 border-white rounded-full">
              <h1
                className={`transition-all ease-out duration-500 ${
                  menuOpen ? "rotate-45" : "rotate-0"
                }  text-[30px] text-white`}
                onClick={() => {
                  setMenuOpen(!menuOpen);
                  setRotateIcon(!rotateIcon);
                }}
              >
                +
              </h1>
            </div>
          </div>
        </div>
        <div
          className={`z-50 absolute opacity-100 right-[-100%] top-[65px] w-full flex flex-col gap-3 bg-[#18377e] p-5 transition-all duration-500 ${
            menuOpen ? "top-[60px] right-[0] opacity-100" : ""
          }`}
        >
          {myMenu.map((item) => (
            <Link
              key={item.path}
              onClick={() => setMenuOpen(!menuOpen)}
              to={item.path}
              className="text-white text-[18px] font-semibold hover:text-[#FF5757] transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
