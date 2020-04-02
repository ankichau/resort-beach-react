import React, { Component } from "react";
import logo from "../images/logo.png";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../App.css";

class Navbar extends Component {
  state = {
    isopen: true
  };
  handeltoggle = () => {
    this.setState({ isopen: !this.state.isopen });
  };
  render() {
    return (
      <nav className="navbar">
        <div>
          <Link to="/">
            <img src={logo} className="nav-logo" />
          </Link>
        </div>
        <div className="nav-header">
          <ul className={this.state.isopen ? "nav-show" : "nav-link"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="rooms">Room</Link>
            </li>
          </ul>
          <button type="button" className="nav-btn" onClick={this.handeltoggle}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
