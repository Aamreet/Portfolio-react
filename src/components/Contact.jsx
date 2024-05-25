import React, { useState } from "react";
import { useSelector } from "react-redux";

import { CONTACT } from "../constants";
import ContactForm from "./ContactForm";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  let [showForm, setShowForm] = useState(true);
  const checked = useSelector((store) => {
    return store.switchBoard;
  });
  return (
    <div className="mt-[20px] mx-auto flex flex-wrap  items-star justify-center  gap-2 border-b border-neutral-900 pb-20 ">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="w-[60vw] md:w-[45%] text-center align-top"
      >
        <h1 className={` mt-4  text-center text-4xl ${checked ? "" : "text-black"}`}>
          Get In Touch
        </h1>
        <p className="my-4 ">{CONTACT.address}</p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 1.5 }}
        className="text-center tracking-tighter w-[80vw] md:w-[50%]"
      >
        <ContactForm></ContactForm>
      </motion.div>
    </div>
  );
};

export default Contact;
