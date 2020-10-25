import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import Masonry from 'react-masonry-component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Gallery from './Gallery';
import Menu from './Menu';
import FilterButton from './FilterButton'

import customdata from '../data/data-all.js';

import twitter from '../images/grey_twitter.png'
import github from '../images/grey_github.png'

import ProjectPage from './ProjectPage'

import '../App.css';

const data = customdata.test;


function ProjectPageRoute ({match, location}) {
  return (<ProjectPage match={match} location={location}></ProjectPage>)
}
class MoreLessButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inner : 'more'
    }
    this.togglediv = document.getElementById("toggle_vis_div");
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.nv.addEventListener('click', this.toggle);
  }

  componentWillUnmount() {
    this.nv.removeEventListener('click', this.toggle);
  }

  toggle() {
    if(this.togglediv == null) {
      this.togglediv = document.getElementById("toggle_vis_div");
    }
    this.togglediv.classList.toggle('gone');
    this.setState({inner: this.state.inner === 'more' ? 'less' : 'more'});
  }

  render(){
    return (
      <button id="togglebutton" ref={elem => this.nv = elem}>
        {this.state.inner}
      </button>
    );
  };
}

function doToggle(){
  let togglediv = document.getElementById('toggle_vis_div');

}



class Index extends Component{
  constructor(props) {
    super(props);
    this.state = {
      width: 0, //starting width
      height: 0, //starting height
      filter: null //filter is null when we begin
    };
    this.match = props.match; //get match for making new path
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.doToggle;
    this.togglebutton;
  }
  //when component mounts, start listening for resizing so we can update project sizes
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  //when component unmounts, stop listening
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    //this.togglebutton.removeEventListener('click', this.togglebutton);
  }
  //puts new height/width into state and triggers rerender
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render () {
    //will route to the component returned by ProjectPageRoute if the link url is not exactly "/"
    //this is kind of maybe a problem for later because anything that matches "/*" gets matched
    //we render project gallery as normal if exactly "/"
    return (
      <div id="body-content">
        <Route path={`${this.match.path}:id`} component={ProjectPageRoute} />
        <Route exact path={this.match.path} render={() => (
          <div>
            <div id="filter-holder">
              <span id="filters">filter by</span>
              <FilterButton global={this} tag='code'></FilterButton>
              <FilterButton global={this} tag='VR / AR'></FilterButton>
              <FilterButton global={this} tag='ML'></FilterButton>
              <FilterButton global={this} tag='Unity'></FilterButton>
              <FilterButton global={this} tag='web'></FilterButton>
              <div id="toggle_more"><MoreLessButton></MoreLessButton>
              <div id="toggle_vis_div" className ='gone'>
              <FilterButton global={this} tag='arduino'></FilterButton>
              <FilterButton global={this} tag='codeless'></FilterButton>
              <FilterButton global={this} tag='sketches'></FilterButton>
              <FilterButton global={this} tag='collaborative'></FilterButton>
              </div></div>
            </div>
            <Gallery match={this.match} wid={this.state.width} filter={this.state.filter}></Gallery></div>
          )}/>
          <div id="footer"><p><i>Site made by Connie</i></p>
          <a href=""><img className="footer_icon" src={twitter}/></a>
          <a href=""><img className="footer_icon" src={github}/></a>
          </div>
      </div>
    );
  }
}

export default Index;
