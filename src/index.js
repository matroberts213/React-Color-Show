import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import {Header} from "./components/Header";
import {BackgroundColors} from "./components/BackgroundColors";
import {Footer} from "./components/Footer";

import {Contact} from "./components/Contact";
import {About} from "./components/About";
import {Home} from "./components/Home";

class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
          <div>
            <div id="theheader">
              <Header title="ReactJs - Color Show"/>
            </div>
            <Switch>
              <Route path="/contact" component={Contact}/>
              <Route path="/about" component={About} />
              <Route path="/" component={Home}/>
            </Switch>
          </div>
        </Router>
          <div id="mainbackground">
            <BackgroundColors />
          </div>
          <div id="footer">
            <Footer title="By Mat Roberts" />
          </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
