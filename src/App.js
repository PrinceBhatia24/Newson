import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import News from "./Components/News";
import Navbar from "./Components/Navbar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/Newson"> <News key="general" pageSize={16}apiKey={"34ccdce864694031b17b0ddc0e760b02"}country={"in"}category={"General"}/></Route>
            <Route exact path="/"> <News key="general" pageSize={16}apiKey={"34ccdce864694031b17b0ddc0e760b02"}country={"in"}category={"General"}/></Route>
            <Route exact path="/sports"> <News key="sports" pageSize={16}apiKey={"34ccdce864694031b17b0ddc0e760b02"}country={"in"}category={"Sports"}/></Route>
            <Route exact path="/business"> <News key="business" pageSize={16}apiKey={"34ccdce864694031b17b0ddc0e760b02"}country={"in"}category={"Business"}/></Route>
            <Route exact path="/health"> <News key="health" pageSize={16}apiKey={"34ccdce864694031b17b0ddc0e760b02"}country={"in"}category={"Health"}/></Route>
            <Route exact path="/science"> <News key="science" pageSize={16}apiKey={"34ccdce864694031b17b0ddc0e760b02"}country={"in"}category={"Science"}/></Route>
            <Route exact path="/technology"> <News key="technology" pageSize={16}apiKey={"34ccdce864694031b17b0ddc0e760b02"}country={"in"}category={"Technology"}/></Route>
            <Route exact path="/entertainment"> <News key="entertainment" pageSize={16}apiKey={"34ccdce864694031b17b0ddc0e760b02"}country={"in"}category={"Entertainment"}/></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
