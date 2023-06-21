import Link from "next/link";
import NavigationLinks from "../../utils/constants";

import { motion, AnimatePresence } from "framer-motion";

const ItemNav = ({ name, path, icon }: NavigationLinks) => {
  return (
    <motion.li
      className="text-white text-xl font-bold"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      exit={{
        opacity: 0,
        y: 90,
        transition: {
          ease: "easeInOut",
          delay: 1,
        },
      }}
    >
      <Link href={path}>{name}</Link>
    </motion.li>
  );
};

export default ItemNav;
