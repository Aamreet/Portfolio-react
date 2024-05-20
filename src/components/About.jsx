import aboutImg from "../assets/about3.jpg";
import { useSelector } from "react-redux";

import { ABOUT_TEXT } from "../constants";

import { motion } from "framer-motion";

const About = () => {
  const checked = useSelector((store) => {
    return store.switchBoard;
  });
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={`my-20 text-center text-4xl ${checked ? "" : "text-black"}`}
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h1>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className=" rounded-2xl opacity-[0.6]"
              src={aboutImg}
              alt="about"
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 150 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p
              className={`my-2 max-w-xl py-6 ${
                checked ? "" : "text-black opacity-[0.6]"
              }`}
            >
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
