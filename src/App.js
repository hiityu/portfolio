import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//main pages
import { Home } from "./components/main/home";
import { About } from "./components/main/about";
import { Work } from "./components/main/work";
import { Contact } from "./components/main/contact";
import { NoMatch } from "./components/main/nomatch";
//component pages
import { Layout } from "./components/nav/layout";
import { Navigationbar } from "./components/nav/navbar";
import { Footer } from "./components/nav/footer";
//work pages
import { afreebird } from "./components/work/afreebird";
import { lawyers } from "./components/work/1800lawyers";
import { ctc } from "./components/work/ctc";
import { jacklenz } from "./components/work/jacklenz";
import { henryboxbrown } from "./components/work/henryboxbrown";
import { stilldanger } from "./components/work/stilldanger";

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
              <Route exact path="/afreebird" component={afreebird} />
              <Route exact path="/1800lawyers" component={lawyers} />
              <Route exact path="/ctc" component={ctc} />
              <Route exact path="/henryboxbrown" component={henryboxbrown} />
              <Route exact path="/jacklenz" component={jacklenz} />
              <Route exact path="/stilldanger" component={stilldanger} />
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
