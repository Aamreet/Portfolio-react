import React from "react";
import { PROJECTS } from "../constants";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

function Project() {
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
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, i) => (
          <div key={i} className="mb-8 flex flex-wrap lg:justify-center lg:p-0 pl-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className=" w-1/4"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className=" mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4 flex flex-wrap gap-2"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => {
                return (
                  <span
                    key={index}
                    className={` mr-2 rounded bg-neutral-200 px-2 py-1 text-xl font-semibold text-purple-900 ${
                      checked ? "" : " bg-[#eee]"
                    }`}
                  >
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
