import React, { useEffect } from "react";
import classes from "./About.module.css";
import { motion } from "framer-motion";

import Particle from "../UI/Particle";
import SkillCard from "../UI/SkillCard";
import { skillset } from "../../constants";
import AboutTop from "./AboutTop";

const About = () => {
  useEffect(() => {
    document.title = "My About Page";
  });

  const skills = {
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

  return (
    <>
      <Particle />
      <div className={classes.AboutSection}>
        <AboutTop />
        <motion.div layout className={classes.skills}>
          <center>
            <h1>Professional Skillset</h1>
          </center>
          <motion.div
            variants={skills}
            initial="closed"
            whileInView="open"
            className={classes.icons}
          >
            {skillset.map((skill) => {
              return <SkillCard skill={skill} />;
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
