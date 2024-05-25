import React, { useState } from "react";
import { useSelector } from "react-redux";
import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile7.png";

import { TypeAnimation } from "react-type-animation";
import { easeIn, easeInOut, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  const checked = useSelector((store) => {
    return store.switchBoard;
  });
  const [animationComplete, setAnimationComplete] = useState(false); // State to track animation completion

  const handleAnimationComplete = () => {
    setAnimationComplete(true); // Set animationComplete to true when animation finishes
  };

  const [flag, setCount] = useState(checked);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              onAnimationComplete={handleAnimationComplete}
              className="pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
              style={{ color: `${checked ? "#ffffffb0" : "black"}` }}
            >
              Amreet Gandi
            </motion.h1>
            <p className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-200 bg-clip-text tracking-tight text-transparent h-[120px] 2xs:h-[75px] text-4xl font-semibold  xs:h-auto">
              {animationComplete && (
                <TypeAnimation
                  sequence={["Frontend Web Developer", 1000, "", 1000]}
                  speed={50}
                  repeat={Infinity}
                />
              )}
            </p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className={`my-4 max-w-xl py-6 font-light tracking-tighter ${
                checked ? "" : "text-black"
              }`}
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: `${checked ? "0.4" : "0.7"}` }}
              transition={{ duration: 1, delay: 1, function: easeInOut }}
              className={`w-[60%] lg:w-[60%] rounded-xl `}
              src={profile}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// ${
//   checked ? "" : "opacity-[0]"
// }
