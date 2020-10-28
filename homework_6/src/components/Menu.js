import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

class Menu extends Component {
  render() {
    const url = this.props.tab;
    return (
      <div id="navbar">
        <div className="menu-items">
          <Link to="/">
            <img
              onClick={() => this.props.global.setState({ tab: "home" })}
              className={url === "home" ? "selected" : ""}
              id="logo"
              src={logo}
              alt="Muddy Paws site logo"
            />
          </Link>
          <Link to="/browse">
            <p
              onClick={() => this.props.global.setState({ tab: "browse" })}
              className={url === "browse" ? "menu-item selected" : "menu-item"}
            >
              Browse
            </p>
          </Link>
          <Link to="/about">
            <p
              onClick={() => this.props.global.setState({ tab: "about" })}
              className={url === "about" ? "menu-item selected" : "menu-item"}
            >
              About us
            </p>
          </Link>
          <Link to="/contact">
            <p
              onClick={() => this.props.global.setState({ tab: "contact" })}
              className={url === "contact" ? "menu-item selected" : "menu-item"}
            >
              Contact
            </p>
          </Link>
          <Link to="/sale">
            <p
              onClick={() => this.props.global.setState({ tab: "sale" })}
              className={url === "sale" ? "menu-item selected" : "menu-item"}
              style={{color: "var(--sale-color)"}}
            >
              Sale
            </p>
          </Link>
        </div>
        <div className="menu-items">
          <Link to="/account">
            <p
              onClick={() => this.props.global.setState({ tab: "account" })}
              className={url === "account" ? "menu-item selected" : "menu-item"}
            >
              Sign in
            </p>
          </Link>
          <Link to="/cart">
            <p
              onClick={() => this.props.global.setState({ tab: "cart" })}
              className={url === "cart" ? "menu-item selected" : "menu-item"}
            >
              Cart <span className="num-items">{this.props.cartItems}</span>
            </p>
          </Link>
        </div>
      </div>
    );
  }
}

export default Menu;
