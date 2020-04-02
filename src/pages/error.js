import React, { Component } from "react";
import Hero from "../Component/hero";
import Banner from "../Component/banner";
import { Link } from "react-router-dom";
import "../App.css";

class Error extends Component {
  render() {
    return (
      <Hero>
        <Banner title="404" subtitle="ERROR">
          <Link to="/" className="btn-primary">
            Home
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default Error;
