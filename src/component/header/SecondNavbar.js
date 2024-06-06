import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";

import Button from "../UI/Button";

function TextLinkExample() {
  const [navColour, updateNavbar] = useState(false);
  const [showItem, updateItem] = useState(true);

  useEffect(() => {
    if (window.screen.width <= 499) {
      updateItem(false);
    }
  }, []);

  const handleResponsive = () => {
    if (window.screen.width <= 490) {
      updateItem((prev) => !prev);
      if (!showItem) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }
  };

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  return (
    <Navbar
      className={`bg-body-tertiary ${navColour ? "blur1" : "hellonav"} ${
        showItem ? "blur" : "hellonav"
      }`}
      fixed="top"
    >
      <Container>
        <Navbar.Collapse className="justify-content-end">
          <Row className="row">
            <Col xs="auto" className={showItem ? "show" : "hide"}>
              <Button to="/" onClick={handleResponsive}>
                <AiOutlineHome size={21} />
                Home
              </Button>
            </Col>
            <Col xs="auto" className={showItem ? "show" : "hide"}>
              <Button to="/about" onClick={handleResponsive}>
                <BsPerson size={21} />
                About
              </Button>
            </Col>
            <Col xs="auto" className={showItem ? "show" : "hide"}>
              <Button to="/projects" onClick={handleResponsive}>
                <GoProjectRoadmap size={21} />
                Projects
              </Button>
            </Col>
            <Col xs="auto" className={"buttonsmall"}>
              <button onClick={handleResponsive} className="menuButton">
                <AiOutlineMenu />
              </button>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
