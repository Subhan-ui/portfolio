import React, { useState } from "react";
import Button from "../UI/Button";

import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import styles from "./SecondNavbar.module.css";
import { BsPerson } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";

const SecondNavbar = () => {
  const [nav, setNav] = useState(false);

  const handleResponsive = () => {
    setNav((prev) => !prev);
  };

  return (
    <div className={styles.divNav}>
      <nav className={styles.nav}>
        <div className={styles.buttons}>
          <Button to="/" onClick={() => {}}>
            <AiOutlineHome size={21} /> Home
          </Button>
          <Button to="/about" onClick={() => {}}>
            <BsPerson size={21} /> About
          </Button>
          <Button to="/projects" onClick={() => {}}>
            <GoProjectRoadmap size={21} /> Projects
          </Button>
        </div>
      </nav>

      <nav onClick={handleResponsive} className={styles.mblNav}>
        <AiOutlineMenu color="white" />

        {nav && (
          <ul className={styles.list}>
            <li>
              <Button to="/" onClick={() => {}}>
                <AiOutlineHome size={21} /> Home
              </Button>
            </li>
            <li>
              <Button to="/about" onClick={() => {}}>
                <BsPerson size={21} /> About
              </Button>
            </li>
            <li>
              <Button to="/projects" onClick={() => {}}>
                <GoProjectRoadmap size={21} /> Projects
              </Button>
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default SecondNavbar;
