import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import classes from "./SkillCard.module.css";

const SkillCard = ({ skill }) => {
  return (
    <>
      <motion.img
        key={skill.id}
        initial={{
          opacity: 0,
          x: -200,
          transition: { duration: 0.2 },
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { type: "spring", stiffness: 300, damping: 24 },
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        src={skill.icon}
        alt={skill.alt}
        className={`${classes.iconsOfImg}`}
        data-tooltip-id={skill.id}
        data-tooltip-content={skill.alt}
        data-tooltip-place="top"
      ></motion.img>
      <Tooltip
        id={skill.id}
        style={{ backgroundColor: "wheat", color: "purple", fontSize: "23px" }}
      />
    </>
  );
};

export default SkillCard;
