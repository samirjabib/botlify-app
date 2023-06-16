"use client";

import NavigationDesktop from "./components/NavigationDesktop";
import NavigationMobile from "./components/NavigationMobile";
import { useHeaderStore, HeaderStoreTypes } from "./store/header-store";

const Header = () => {
  const {navBarOpen, setNavBarOpen} = useHeaderStore();

  return (
    <header className="h-20 w-full absolute top-0 left-0 bg-gray ">
      <div className=" wrapper-mobile md:wrapper flex justify-between h-full items-center ">
        <div className="flex flex-row items-center gap-x-2 font-extrabold text-2xl border-2 border-red-500 ">
          <h2 className="text-white">
            Bot
            <span className="text-blue">lify</span>
          </h2>
        </div>

        <nav className="max-w-xl ">
          <NavigationDesktop />
          <NavigationMobile isOpen={navBarOpen} setOpen={setNavBarOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
