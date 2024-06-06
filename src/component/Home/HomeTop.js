import { motion } from "framer-motion";
import Type from "./Type";
import Animation from "../../Assets/Animations.gif";
import classes from "./Home.module.css";

const HomeTop = () => {
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
  return (
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
      <motion.div variants={items2} className={classes.AnimationDiv}>
        <img src={Animation} className={classes.Animation} alt="" />
      </motion.div>
    </motion.div>
  );
};

export default HomeTop;
