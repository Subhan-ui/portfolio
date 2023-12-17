import React, { useEffect } from "react";
import classes from "./About.module.css";
import { motion } from "framer-motion";

import ImageExample from "./ImageExample";
import Particle from "../UI/Particle";

import Icon from "../../Assets/Icon.svg";
import HTML from "../../Assets/HTML.svg";
import CSS from "../../Assets/css3.svg";
import Javascript from "../../Assets/Javascript.svg";
import react from "../../Assets/React.svg";
import Git from "../../Assets/Git-Icon.svg";


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
        staggerChildren: 0.05
      }
    },
    closed: {
     opacity: 0,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    }
  }
  const icons = {
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    },
    closed: { opacity: 0, x: 20, transition: { duration: 0.2, } }
  };
  
  const skillset = [
    { id: 1, icon: HTML, alt: "this is html icon" },
    { id: 2, icon: CSS, alt: "this is css icon" },
    { id: 3, icon: Javascript, alt: "this is javascript icon" },
    { id: 4, icon: react, alt: "this is react icon" },
    { id: 5, icon: Git, alt: "this is Git icon" },
  ];

  return (
    <>
      <Particle />
      <div className={classes.AboutSection} >
        <div className={classes.about}>
          <motion.div initial={{opacity:0, x:-200, }} animate={{opacity:1, x: 0, transition:{duration:1, type:'spring', stiffness:300}}}>
            <center>
              <h1>
                <span className="purple">Know</span> Who I am
              </h1>
            </center>
            <p>
              Hi Everyone, I am <span className="purple">Subhan Shoukat</span>{" "}
              from Faisalabad, Pakistan. <br /> I am a{" "}
              <span className="purple">7th Semester</span> Student pursuing{" "}
              <span className="purple">B.S in Software Engineer</span> <br />{" "}
              from UAF. <br />
              Additionaly I am enthusiastic about{" "}
              <span className="purple">React.</span>
              <br />
              <br />{" "}
              <b>
                Some of My <span className="purple">Hobbies</span> are{" "}
              </b>{" "}
              <br /> <img className={classes.small} src={Icon} alt="" />
              Watching Movies <br />
              <img className={classes.small} src={Icon} alt="" /> R & D New
              Technologies
            </p>
          </motion.div>
          
            <ImageExample />
          
        </div>
        <motion.div layout className={classes.skills}>
          <center>
            <h1>Professional Skillset</h1>
          </center>
          <motion.div variants={skills} initial='closed' whileInView='open' className={classes.icons}>
            {skillset.map((skill) => {
              return (
                <motion.img
                key={skill.id}
                initial={{ opacity: 0, x: -200, transition: { duration: 0.2, } }}
                whileInView={{opacity: 1,
                  x: 0,
                  transition: { type: "spring", stiffness: 300, damping: 24 }}}
                whileHover={{scale: 1.2, }}
                whileTap={{scale: 0.8}}
                src={skill.icon}
                alt={skill.alt}
                className={classes.iconsOfImg}
                
                ></motion.img>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
