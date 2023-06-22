"use client";
import { useLoginStore } from "@/components/login/store/login-store";
import useAuth from "hooks/useAuth";
import { useSupabase } from "hooks/useSupabase";
import { useEffect } from "react";
import { useHeaderStore } from "../store/header-store";
import NavigationLinks from "../utils/constants";
import NavigationDesktop from "./desktop/navigation-desktop";
import NavigationMobile from "./mobile/navigation-mobile";

const NavigationBar = () => {
  const { navBarOpen, setNavBarOpen } = useHeaderStore();
  const { openModalLogin, setModalLogin } = useLoginStore();
  const { user } = useAuth();
  console.log(user, " this is the user on the navigation bar");

  useEffect(() => {
    if (navBarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [navBarOpen]);

  return (
    <nav className="max-w-xl ">
      <NavigationDesktop
        isOpenLogin={openModalLogin}
        setOpenLogin={setModalLogin}
      />
      <NavigationMobile
        isOpen={navBarOpen}
        setOpen={setNavBarOpen}
        links={NavigationLinks}
        isOpenLogin={openModalLogin}
        setOpenLogin={setModalLogin}
      />
    </nav>
  );
};

export default NavigationBar;
