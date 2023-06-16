import Hamburger from "hamburger-react";

import { motion, AnimatePresence } from "framer-motion";
import ItemNav from "./ItemNav";
import NavigationLinks from "../../utils/constants";

const NavigationMobile = ({
  isOpen,
  setOpen,
  links,
}: {
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  links: NavigationLinks[];
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

  return (
    <div className="  flex md:hidden" onClick={() => setOpen(!isOpen)}>
      <Hamburger toggled={isOpen} color="white" size={28} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit="exit"
            className="absolute top-20 left-0 w-full h-screen bg-black flex flex-col items-center justify-center gap-y-8"
          >
            <ul className="flex flex-col items-center justify-center gap-y-8">
              {links.map((link) => (
                <ItemNav key={link.name} {...link} />
              ))}
            </ul>
            <button className="border transition-all hover:bg-white/10 font-medium border-white/20 px-4 py-1 rounded-full">
              <a className="">Contacto</a>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationMobile;
