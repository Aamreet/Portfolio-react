import React from "react";
import { CONTACT } from "../constants";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
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

        <a
          className="btn btn-primary"
          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}&su=Hello%20there&body=This%20is%20the%20body%20of%20the%20email.`}
        >
          <p>Send mail</p>
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
