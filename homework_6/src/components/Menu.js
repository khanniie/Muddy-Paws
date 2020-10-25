import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import { HashRouter as Router, Route, Link } from "react-router-dom";

import pancake from '../images/pancake.png';
import unpancake from '../images/close.png';
import logo from '../images/wordart3.png';
import hoverlogo from '../images/wordart.png';

class Menu extends Component {

render(){
const url = this.props.tab;
return (
    <div>
    <ResponsiveMenu
      menuOpenButton={
          <img className="pancake" src={pancake} alt=""/>}
      menuCloseButton={
          <img className="pancake" src={unpancake} alt=""/>}
      changeMenuOn="768px"
      largeMenuClassName="large-menu"
      smallMenuClassName="small-menu"
      menu={
        <ul>
        <Link to="/">
        <li onClick = {() => this.props.global.setState({'tab' : 'projects'})} id="text-logo">Constance Ye</li>
        </Link>
          <Link to="/"><li onClick = {() => this.props.global.setState({'tab' : 'projects'})} className={ url === "projects" ? "notlogo selected" : "notlogo" }>projects</li></Link>
          <Link to="/about"><li onClick = {() => this.props.global.setState({'tab' : 'about'})} className={ url === "about" ? "notlogo selected" : "notlogo" } >about</li></Link>
          <Link to="/resume"><li onClick = {() => this.props.global.setState({'tab' : 'resume'})} className={ url === "resume" ? "notlogo selected" : "notlogo" }>resume</li></Link>
        </ul>
      }
    /></div>)
  }
}

// <div className="leftward-nav">
//   <Link to="/about"><li>about</li></Link>
//   <li>resume</li>
// </div>
// <div className="rightward-nav">
//   <Link to="/"><li>projects</li></Link>
//   <li>contact</li>
// </div>

export default Menu;
