import { motion } from "framer-motion";

import Icon from "../../Assets/Icon.svg";
import ImageExample from "./ImageExample";
import classes from "./About.module.css";

const AboutTop = () => {
  return (
    <div className={classes.about}>
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 1, type: "spring", stiffness: 300 },
        }}
      >
        <center>
          <h1>
            <span className="purple">Know</span> Who I am
          </h1>
        </center>
        <p>
          Hi Everyone, I am <span className="purple">Subhan Shoukat</span> from
          Faisalabad, Pakistan. <br /> I am a{" "}
          <span className="purple">7th Semester</span> Student pursuing{" "}
          <span className="purple">B.S in Software Engineer</span> <br /> from
          UAF. <br />
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
  );
};

export default AboutTop;
