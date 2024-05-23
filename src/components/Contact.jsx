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
    <div className=" border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className={`my-10 text-center text-4xl ${checked ? "" : "text-black"}`}
      >
        Get In Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 1.5 }}
        className="text-center tracking-tighter"
      >
        <p className="my-4 ">{CONTACT.address}</p>
          <ContactForm></ContactForm>
      </motion.div>
    </div>
  );
};

export default Contact;
