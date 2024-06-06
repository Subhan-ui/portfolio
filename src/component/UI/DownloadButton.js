import React from "react";
import classes from "./DownloadButton.module.css";
import { motion } from "framer-motion";

const DownloadButton = (props) => {
  return (
    <div>
      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { type: "spring", duration: 1.2 },
        }}
        whileTap={{ scale: 0.8 }}
        href={props.href}
        download={props.name}
        type="button"
        className={classes.button}
      >
        <span className={classes.button__text}>Download</span>
        <span className={classes.button__icon}>
          <svg
            className={classes.svg}
            data-name="Layer 2"
            id="bdd05811-e15d-428c-bb53-8661459f9307"
            viewBox="0 0 35 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
            <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
            <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
          </svg>
        </span>
      </motion.a>
    </div>
  );
};

export default DownloadButton;
