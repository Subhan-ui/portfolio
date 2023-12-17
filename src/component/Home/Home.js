import React, { useEffect, useRef } from "react";
import classes from "./Home.module.css";
import { FaGithub, FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

import Particle from "../UI/Particle";
import Type from "./Type";
import ContactButton from "../UI/ContactButton";
import Download from "../../Assets/SubhanShoukat.pdf";

import Animation from "../../Assets/Animations.gif";
import DownloadButton from "../UI/DownloadButton";

const arrays = [
  { id: 1, name: <FaGithub />, href: "https://github.com/Subhan-ui/" },
  {
    id: 2,
    name: <FaFacebook />,
    href: "https://www.facebook.com/subhan.shoukat.7/",
  },
  {
    id: 3,
    name: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/subhan-shoukat-725aa0218/",
  },
  { id: 4, name: <BiLogoGmail />, href: "mailto:subhanshoukat1908@gmail.com" },
];

const Home = () => {
  useEffect(() => {
    document.title = "Subhan's Portfolio";
  });

  const download = useRef();

  const variants = {
    hidden: { opacity: 0, y: -150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.5,
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };
  
  const items = {
    hidden: { opacity: 0, x: -150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const items2 = {
    hidden: { opacity: 0, x: 150 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const findMe = {
    open: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.7,
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3,
      },
    },
  };
  const contact = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, x: 20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <Particle />
      <div className={classes.itsWholeComponent}>
        <motion.div
          layout
          variants={variants}
          initial="hidden"
          whileInView="visible"
          className={classes.wholeHomeComponent}
        >
          <motion.div variants={items} className={classes.introPart}>
            <h1 className={classes.heading}>
              <span className="purple">Hi,</span> There!
              <span className={classes.wave} role="img" aria-labelledby="wave">
                👋🏻
              </span>
              <br />
              I'm{" "}
              <span className="purple">
                Subhan Shoukat <br />
              </span>
              <br />
              <Type />
            </h1>
          </motion.div>
          <motion.div variants={items2}>
            <img src={Animation} className={classes.Animation} alt="" />
          </motion.div>
        </motion.div>
        <motion.div className={classes.findMeOn}>
          <div className={classes.findMeOn1}>
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { type: "spring", duration: 0.7, stiffness: 300 },
              }}
            >
              <span className="purple">FIND ME</span> ON
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { type: "spring", duration: 1.3, stiffness: 300 },
              }}
            >
              Feel free to <b className="purple"> Contact </b> with me{" "}
            </motion.p>
            <motion.div
              variants={findMe}
              initial="closed"
              whileInView="open"
              className={classes.contacts}
            >
              {arrays.map((arr) => {
                return (
                  <ContactButton contact={contact} href={arr.href} key={arr.id}>
                    {arr.name}
                  </ContactButton>
                );
              })}
            </motion.div>
          </div>
          <motion.div
            ref={download}
            className={classes.Downloading}
            style={{ marginTop: "12px", marginBottom: "35px" }}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { type: "spring", duration: 0.7, stiffness: 300 },
              }}
            >
              <b className="purple my-2">Or</b>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                transition: { type: "spring", duration: 1.3, stiffness: 300 },
              }}
            >
              <b className="purple">Download</b> My CV
            </motion.p>
            <DownloadButton href={Download} name="Subhan.pdf" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Home;
