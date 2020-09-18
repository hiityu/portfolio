import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./home";
import { About } from "./about";
import { Work } from "./work";
import { Contact } from "./contact";
import { NoMatch } from "./nomatch";
import { Layout } from "./components/layout";
import { Navigationbar } from "./components/navbar";
import { Footer } from "./components/footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigationbar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/work" component={Work} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
