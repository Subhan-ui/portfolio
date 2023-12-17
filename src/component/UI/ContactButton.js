import React from "react";
import classes from "./Contact.module.css";
import { motion } from "framer-motion";

const ContactButton = (props) => {
  return (
    <motion.a
      variants={props.contact}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={classes.Btn}
    >
      <span className={classes.svgContainer}>{props.children}</span>
      <span className={classes.BG}></span>
    </motion.a>
  );
};

export default ContactButton;
