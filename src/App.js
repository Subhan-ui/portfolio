import React, { Fragment, useEffect, useState } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

import Navbar from "./component/header/Navbar";
import About from "./component/About/About";
import Footer from "./component/header/Footer";
import Home from "./component/Home/Home";
import ProjectMain from "./component/Projects/ProjectMain";
import Welcome from "./component/Welcome/Welcome";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 1500);
  }, []);

  return (
    <Fragment>
      <div className="wholeComponent">
        <Navbar />
        <AnimatedCursor
          innerScale={1}
          innerSize={12}
          outerSize={12}
          outerAlpha={0.2}
          color="135, 11, 193"
          showSystemCursor
          innerStyle={{ width: "45px" }}
          outerStyle={{ width: "45px" }}
          hasBlendMode={true}
          outerScale={5}
        />
        {showWelcome && <Welcome />}
        <Switch>
          {!showWelcome && (
            <Route path="/" exact>
              <Home />
            </Route>
          )}
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <ProjectMain />
          </Route>
          <Route path="*" exact>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
