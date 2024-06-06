import { Redirect, Switch, Route } from "react-router-dom";

import About from "./component/About/About";
import Home from "./component/Home/Home";
import ProjectMain from "./component/Projects/ProjectMain";
import Layout from "./component/layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
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
      </Layout>
    </>
  );
};

export default App;