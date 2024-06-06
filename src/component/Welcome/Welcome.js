import React from "react";
import classes from "./Welcome.module.css";
import { AnimatePresence, motion } from "framer-motion";

import welcome from "../../Assets/welcome.gif";

const Welcome = () => {
  return (
    <AnimatePresence>
      <div className={classes.welcomePage}>
        <motion.img
          key="img"
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 1000 }}
          src={welcome}
          alt="welcome-page"
        />
      </div>
    </AnimatePresence>
  );
};

export default Welcome;
