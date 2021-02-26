import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import foods from "./data/myData";
function App() {
  const Links = foods.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <Router>
      <Navbar foods={foods} />
      <div className="container">
        <div className="row text-center">
          <Switch>{Links}</Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
