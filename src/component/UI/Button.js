import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <motion.div whileTap={{ scale: 0.8 }}>
      <Link to={props.to} onClick={props.onClick} className={classes.btn}>
        {props.children}
      </Link>
    </motion.div>
  );
};

export default Button;
