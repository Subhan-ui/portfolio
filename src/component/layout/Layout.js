import AnimatedCursor from "react-animated-cursor";
import { useState, useEffect } from "react";


import Footer from "../header/Footer";
import Welcome from "../Welcome/Welcome";
import SecondNavbar from "../header/Navbar";

const Layout = ({ children }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
  }, []);
  return (
    <>
      <div className="wholeComponent">
        <SecondNavbar />
        <AnimatedCursor
          innerScale={2}
          innerSize={12}
          outerSize={12}
          outerAlpha={0.4}
          color="135, 11, 193"
          showSystemCursor
          innerStyle={{ width: "45px" }}
          outerStyle={{ width: "45px" }}
          hasBlendMode={true}
          outerScale={8}
        />
        {showWelcome && <Welcome />}
        {!showWelcome && children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
