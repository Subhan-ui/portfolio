import React from "react";
import Tilt from "react-parallax-tilt";
import "../../App.css";
import { motion } from "framer-motion";

import SubhanImage from "../../Assets/Subhan.jpeg";

const ImageExample = () => {
  return (
    <>
      <Tilt>
        <motion.img
          initial={{ opacity: 0, rotate: -360, scale: 0.5 }}
          animate={{
            opacity: 1,
            rotate: 0,
            scale: 1,
            transition: { duration: 1, type: "spring", stiffness: 150 },
          }}
          whileHover={{ scale: 1.2 }}
          src={SubhanImage}
          className="img-about"
          alt="MyPicture"
        />
      </Tilt>
    </>
  );
};

export default ImageExample;
