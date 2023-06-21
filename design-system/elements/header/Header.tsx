"use client";
import Login from "@/components/Login/login";
import Logo from "@/design-system/elements/Logo/Logo";
import NavigationBar from "./components/navigation-bar";

const Header = () => {
  return (
    <header className="h-20 w-full absolute top-0 left-0 bg-gray ">
      <div className=" wrapper-mobile md:wrapper flex justify-between h-full items-center ">
        <Logo />
        <NavigationBar />
      </div>
      <Login />
    </header>
  );
};

export default Header;
