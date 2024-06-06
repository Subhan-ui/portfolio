import { motion } from "framer-motion";
import { useRef } from "react";

import Download from "../../Assets/SubhanShoukat.pdf";
import DownloadButton from "../UI/DownloadButton";
import classes from "./Home.module.css";

const DownloadCV = () => {
  const download = useRef();
  return (
    <motion.div
      ref={download}
      className={classes.Downloading}
      style={{ marginTop: "12px", marginBottom: "35px" }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { type: "spring", duration: 0.7, stiffness: 300 },
        }}
      >
        <b className="purple my-2">Or</b>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { type: "spring", duration: 1.3, stiffness: 300 },
        }}
      >
        <b className="purple">Download</b> My CV
      </motion.p>
      <DownloadButton href={Download} name="Subhan.pdf" />
    </motion.div>
  );
};

export default DownloadCV;
