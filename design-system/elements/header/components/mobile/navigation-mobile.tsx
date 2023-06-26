import Hamburger from "hamburger-react";

import { motion, AnimatePresence } from "framer-motion";
import ItemNav from "./item-nav";
import NavigationLinks from "../../utils/constants";
import { Profile } from "types/collections";
import NavLinksMobiles from "./navigation-service";
import { useEffect, useRef } from "react";

const NavigationMobile = ({
  isOpen,
  setOpen,
  links,
  isOpenLogin,
  setOpenLogin,
  user,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  links: NavigationLinks[];
  isOpenLogin: boolean;
  setOpenLogin: (open: boolean) => void;
  user: Profile | null | undefined;
}) => {
  //lets start animation
  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 0.3,
      },
    },
  };

  console.log(isOpen);

  return (
    <div className="md:hidden ">
      <div onClick={() => setOpen(!isOpen)}>
        <Hamburger toggled={isOpen} color="white" size={28} />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit="exit"
            className="absolute top-20 left-0  w-full h-screen bg-black flex flex-col items-center justify-center  gap-y-8"
          >
            <ul className="flex flex-col items-center justify-center gap-y-8 relative bottom-24">
              <NavLinksMobiles />
              <motion.button
                className="border text-white transition-all hover:bg-white/10 font-medium border-white/20 px-4 py-1 rounded-full"
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                exit={{
                  opacity: 0,
                  y: 90,
                  transition: {
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              >
                <button
                  className="text-xl "
                  onClick={() => setOpenLogin(!isOpenLogin)}
                >
                  Sign In
                </button>
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationMobile;
