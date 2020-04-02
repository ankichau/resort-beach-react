import React from "react";
import { Route, Switch } from "react-router-dom";
/*import logo from './images/logo.png'*/
/*import './App.css';*/
import Home from "./pages/home";
import Room from "./pages/room";
import SingleRoom from "./pages/singleroom";
import Error from "./pages/error";

import Navbar from "./Component/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route exact path="/room/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
