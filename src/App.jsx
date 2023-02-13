import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import logo from "./logo.jpg";
import Contactus from "./components/Contact/Contactus";
import "animate.css";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;

      setScroll(scroll);
    };

    window.addEventListener("scroll", progressBarHandler);

    return () => window.removeEventListener("scroll", progressBarHandler);
  });
  return (
    <div>
      <div id="progressBarContainer">
        <div id="progressBar" style={{ transform: `scale(${scroll}, 1)`, opacity: `${scroll}` }}></div>
      </div>
      <nav
        style={{
          height: "150px",
          backgroundColor: "rgb(250,240,230)",
          width: "100%",
          zIndex: "20",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          left: 0,
        }}
      >
        <img
          style={{
            borderRadius: "50%",
            height: "140px",
            width: "140px",
          }}
          className="animate__animated animate__fadeInDown logo"
          src={logo}
        />
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/blog/:id" component={Blog} />
          <Redirect to="/" />
        </Switch>
      </div>
      <Contactus />
      <Footer />
    </div>
  );
};

export default App;
