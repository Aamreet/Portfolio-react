import SwitchBtn from "./SwitchBtn";

import Alogo from "../assets/Alogo.jpg";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";


import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const hoverEffect = () => {
  return {
    translateY: "-10%",
    delay: 1,
    cursor: "pointer",
  };
};

const Navbar = () => {
  const checked = useSelector((store) => {
    return store.switchBoard;
  });
  return (
    <nav className=" mb-[30px] flex items-center flex-wrap justify-between py-6">
      <motion.div
        whileHover={hoverEffect}
        className=" w-12 h-12 bg-cover bg-center border-none rounded xs:w-20 xs:h-20 "
        style={{
          backgroundImage: `url(${Alogo})`,
          backgroundColor: "#4d4b5d",
          backgroundBlendMode: `${checked ? "color-burn" : "color-dodge"}`,
        }}
      ></motion.div>
      <SwitchBtn />
      <div className="m-8 flex items-center justigy-center gap-4 text-2xl">
      <motion.div whileHover={hoverEffect}>
          <a target="_blank" href="https://leetcode.com/u/Saigojo/">
            <SiLeetcode color={!checked ? "black" : ""} />
          </a>
        </motion.div>
        <motion.div whileHover={hoverEffect}>
          <a target="_blank" href="https://github.com/Aamreet/">
            <FaGithub color={!checked ? "black" : ""} />
          </a>
        </motion.div>

        <motion.div whileHover={hoverEffect}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amreet-gandi-487747208/"
          >
            <FaLinkedin color={!checked ? "black" : ""} />
          </a>
        </motion.div>
       
      </div>
    </nav>
  );
};

export default Navbar;
