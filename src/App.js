import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import News from "./Components/News";
import Navbar from "./Components/Navbar";

const App = (props) => {
  const apiKey = "34ccdce864694031b17b0ddc0e760b02";
  const pageSize = "16"
  const country = "in"

  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/Newson">
            {" "}
            <News
              key="general"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"General"}
            />
          </Route>
          <Route exact path="/">
            {" "}
            <News
              key="general"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"General"}
            />
          </Route>
          <Route exact path="/sports">
            {" "}
            <News
              key="sports"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Sports"}
            />
          </Route>
          <Route exact path="/business">
            {" "}
            <News
              key="business"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Business"}
            />
          </Route>
          <Route exact path="/health">
            {" "}
            <News
              key="health"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Health"}
            />
          </Route>
          <Route exact path="/science">
            {" "}
            <News
              key="science"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Science"}
            />
          </Route>
          <Route exact path="/technology">
            {" "}
            <News
              key="technology"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Technology"}
            />
          </Route>
          <Route exact path="/entertainment">
            {" "}
            <News
              key="entertainment"
              pageSize={pageSize}
              apiKey={apiKey}
              country={country}
              category={"Entertainment"}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
