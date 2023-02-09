import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import logo from "./logo.jpg";

const App = () => {
  return (
    <div>
      <nav
        style={{
          height: "150px",
          backgroundColor: "rgb(250,240,230)",
          width: "100%",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img style={{ borderRadius: "50%", height: "140px", width: "140px" }} src={logo} />
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog/:id" component={Blog} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
