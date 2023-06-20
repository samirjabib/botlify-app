"use client";

import NavigationDesktop from "./components/desktop/NavigationDesktop";
import NavigationMobile from "./components/mobile/NavigationMobile";
import { useHeaderStore } from "./store/header-store";
import NavigationLinks from "./utils/constants";
import { useEffect } from "react";

const Header = () => {
  const { navBarOpen, setNavBarOpen } = useHeaderStore();

  useEffect(() => {
    if (navBarOpen) {
      document.body.classList.add("overflow-hidden");
      console.log("is open");
    } else {
      document.body.classList.remove("overflow-hidden");
      console.log("is closed");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
      console.log("is removed and closed");
    };
  }, [navBarOpen]);

  return (
    <header className="h-20 w-full absolute top-0 left-0 bg-gray ">
      <div className=" wrapper-mobile md:wrapper flex justify-between h-full items-center ">
        <div className="flex flex-row items-center gap-x-2 font-extrabold text-2xl  ">
          <h2 className="text-white">
            Bot
            <span className="text-blue">lify</span>
          </h2>
        </div>

        <nav className="max-w-xl ">
          <NavigationDesktop />
          <NavigationMobile
            isOpen={navBarOpen}
            setOpen={setNavBarOpen}
            links={NavigationLinks}
          />
        </nav>
      </div>
      {/* Black background for mobile menu */}
      {/* <div
        className={`fixed top-0 z-30 h-screen w-full overflow-hidden transition-opacity duration-75 ease-in-out ${
          navBarOpen
            ? "opacity-100 pointer-events-auto bg-black"
            : "opacity-0 pointer-events-none"
        }`}
      /> */}
    </header>
  );
};

export default Header;
