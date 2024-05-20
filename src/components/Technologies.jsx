// import { RiReactjsLine } from "react-icons/ri"
import { RiReactjsLine } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { RiNodejsLine } from "react-icons/ri";
import { useSelector } from "react-redux";

import { animate, motion } from "framer-motion";

const iconVariants = (duration) => {
  return {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };
};

const Technologies = () => {
  const checked = useSelector((store) => {
    return store.switchBoard;
  });
  return (
    <div className=" border-b border-neutral-800 pb-24">
      <motion.h1 whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
       transition={{duration:1.5}}
        className={`my-20 text-center text-4xl ${checked ? "" : "text-black"}`}
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.4 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 "
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 "
        >
          <DiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 "
        >
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 "
        >
          <RiNodejsLine className="text-7xl text-green-500" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
