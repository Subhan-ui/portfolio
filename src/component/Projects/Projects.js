import React, { useRef } from "react";

import { motion } from "framer-motion";
import "./Projects.css";

import { BsArrowRight } from "react-icons/bs";

const Projects = ({ heading, description, images, href }) => {
  const ref = useRef(null);
  return (
    <>
      <motion.div
        // Following is for animation
        // initial={{ opacity: 0 }}
        // whileInView={{
        //   opacity: 1,
        //   transition: { duration: 1.5, type: "spring" },
        // }}
        className="project"
      >
        <h2 style={{ marginTop: "25px" }} className="purple">
          {heading}
        </h2>
        {description} <br />
        <motion.ul
        // Following is for animation
          // initial={{ x: -1000, opacity: 0 }}
          // layout
          // whileInView={{
          //   x: 0,
          //   opacity: 1,
          //   transition: {
          //     type: "spring",
          //     stiffness: 200,
          //     damping: 12,
          //     duration: 0.9,
          //   },
          // }}
          // viewport={{ once: true }}
          className="ul"
          ref={ref}
        >
          {images.map((image) => (
            <motion.li
              whileHover={{ scale: 1.2, zIndex: 230 }}
              className="li"
              key={image.id}
            >
              <img
                src={image.img}
                className="liImage"
                alt=""
                style={{
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  border: "3px solid transparent",
                }}
              />
            </motion.li>
          ))}
        </motion.ul>
        <p className="slide">
          Slide to watch more Images
          <BsArrowRight />
        </p>
        <motion.a
          whileTap={{ scale: 0.9 }}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="link1234"
        >
          <p>Visit</p>
          <BsArrowRight />
        </motion.a>
      </motion.div>
    </>
  );
};

export default Projects;
