import { useEffect } from "react";
import { motion } from "framer-motion";

import classes from "./Home.module.css";
import Particle from "../UI/Particle";
import ContactButton from "../UI/ContactButton";
import { arrays } from "../../constants";
import HomeTop from "./HomeTop";
import DownloadCV from "./DownloadCV";

const Home = () => {
  useEffect(() => {
    document.title = "Subhan's Portfolio";
  });

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
        <HomeTop />
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
          <DownloadCV />
        </motion.div>
      </div>
    </>
  );
};

export default Home;
