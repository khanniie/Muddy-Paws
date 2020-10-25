import React, { Component } from 'react';
import ResponsiveMenu from 'react-responsive-navbar';
import Masonry from 'react-masonry-component';
import { HashRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import { Document, Page } from 'react-pdf';

import Gallery from './components/Gallery';
import Menu from './components/Menu';
import FilterButton from './components/FilterButton'

import customdata from './data/data-all.js';

import twitter from './images/grey_twitter.png'
import github from './images/grey_github.png'
import me from './images/me.jpg'

import resume from './images/resume.pdf'

import ProjectPage from './components/ProjectPage'

import './App.css';

const data = customdata.test;

function findElement(url){
  for (var i = 0; i < data.length; i++){
    if(data[i].url === url) return data[i];
  }
  return false;
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

var doit
const resize = function(updateWindowDimensions){
  clearTimeout(doit);
  doit = setTimeout(updateWindowDimensions, 100);
};

class Index extends Component{

  constructor(props) {
    super(props);
    this.state = {
      width: 0, //starting width
      filter: null //filter is null when we begin
    };
    this.match = props.match; //get match for making new path
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.doToggle;
    this.togglebutton;
    this.body = document.getElementsByTagName("BODY")[0];
    this.global = props.global;
    props.global.setState({'tab':'projects'})
  }
  //when component mounts, start listening for resizing so we can update project sizes
  componentDidMount() {
    this.updateWindowDimensions();
    this.global.setState({'tab':'projects'});
    window.addEventListener('resize', () => resize(this.updateWindowDimensions));
  }
  //when component unmounts, stop listening
  componentWillUnmount() {
    window.removeEventListener('resize', () => resize(this.updateWindowDimensions));
    //this.togglebutton.removeEventListener('click', this.togglebutton);
  }
  //puts new height/width into state and triggers rerender
  updateWindowDimensions() {
    if(this.body != null){
      this.setState({ width: this.body.clientWidth });
    }
  }

  render () {
    //this.global.setState({'tab':'projects'});
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
              <FilterButton global={this} tag='web'></FilterButton>
              <FilterButton global={this} tag='Unity'></FilterButton>
              <FilterButton global={this} tag='VR / AR'></FilterButton>
              <FilterButton global={this} tag='ML / AI'></FilterButton>
              <div id="toggle_more"><MoreLessButton></MoreLessButton>
              <div id="toggle_vis_div" className ='gone'>
              <FilterButton global={this} tag='arduino'></FilterButton>
              <FilterButton global={this} tag='codeless'></FilterButton>
              <FilterButton global={this} tag='sketches'></FilterButton>
              <FilterButton global={this} tag='collaborative'></FilterButton>
              </div></div>
            </div>
            <Gallery ref={elem => this.gal = elem} match={this.match} wid={this.state.width} filter={this.state.filter}></Gallery></div>
          )}/>
      </div>
    );
  }
}

class About extends Component{

  constructor(props){
    super(props);
    this.state = {width: 0};
    this.body = document.getElementsByTagName("BODY")[0];
    this.global = props.global;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.global.setState({'tab':'about'});
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  //when component unmounts, stop listening
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    //this.togglebutton.removeEventListener('click', this.togglebutton);
  }
  //puts new height/width into state and triggers rerender
  updateWindowDimensions() {
    if(this.body != null){
      this.setState({ width: this.body.clientWidth });
    }
  }

  render(){
    if(this.state.width < 600){
      return (
      <div id="about">
        <div id="abt_pic_small"><img src={me}/></div>
        <div id="abt_text_small"><h1>About me</h1>
        <p> Hi! I'm an undergraduate student, studying Computer Science and Art at
        Carnegie Mellon University. I'm generally interested in cute monsters and alternative realities.
        At school, I'm excitedly learning about human-computer interaction, machine learning, and emerging technologies.
        <br/><br/>
        I want to use computation to build empathetic experiences.
        <br/><br/>One of the greatest joys in my life is my dog, <a href="https://www.instagram.com/meimeithemorkie/" className="selected" >who has a dog instagram! </a>
        <br/><br/>
        Feel free to contact me at <span className="selected">constany (at) andrew (dot) cmu (dot) edu </span> !
        </p>
        </div>
      </div>)
    } else {
      return (
      <div id="about">
        <div id="abt_pic"><img src={me}/></div>
        <div id="abt_text"><h1>About me</h1>
        <p> Hi! I'm an undergraduate student, studying Computer Science and Art at
        Carnegie Mellon University. I'm generally interested in cute monsters and alternative realities.
        At school, I'm excitedly learning about human-computer interaction, machine learning, and emerging technologies.
        <br/><br/>
        I want to use computation to build empathetic experiences.
        <br/><br/>One of the greatest joys in my life is my dog, <a href="https://www.instagram.com/meimeithemorkie/" className="selected" >who has a dog instagram! </a>
        <br/><br/>
        Feel free to contact me at <span className="selected">constany (at) andrew (dot) cmu (dot) edu </span> !
        </p>
        </div>
      </div>)
    }

  }
}

class Resume extends Component{

  constructor(props){
    super(props);
    this.state = {width: 0};
    this.body = document.getElementsByTagName("BODY")[0];
    this.global = props.global;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.global.setState({'tab':'resume'});
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  //when component unmounts, stop listening
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    //this.togglebutton.removeEventListener('click', this.togglebutton);
  }
  //puts new height/width into state and triggers rerender
  updateWindowDimensions() {
    if(this.body != null){
      this.setState({ width: this.body.clientWidth });
    }
  }

  render(){
    if(this.state.width < 600){
      return (
        <div id="resume-page">
          <div className = "warning"><p>
          Your screen size is too small to view the PDF, please either resize the page, or
          <br/>
          <a href= "https://www.dropbox.com/s/56hjgxii5l3iszy/constanceye_resume_feb_2019.pdf?dl=0">
          click on this to view it through Dropbox.</a></p></div>
        </div>
      );
    } else {
     return (
       <div id="resume-page">
         <div id="downloadlink"><p><a href= "https://www.dropbox.com/s/56hjgxii5l3iszy/constanceye_resume_feb_2019.pdf?dl=0">
         Resume Download Link</a></p></div>
         <Document file={resume} className="resume">
           <Page pageNumber={1}
            />
         </Document>
       </div>
     );
  }
}

}


function ProjectPageRoute ({match, location}) {
  return (<ProjectPage match={match} location={location}></ProjectPage>)
}

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      'tab' : 'about'
    }
    this.AboutRoute = this.AboutRoute.bind(this);
    this.ResumeRoute = this.ResumeRoute.bind(this);
    this.IndexRoute = this.IndexRoute.bind(this);
  }

  AboutRoute ({match, location}){
    return (<About global={this} match={match} location={location}></About>)
  }

  IndexRoute ({match, location}){
    return (<Index global={this} match={match} location={location}></Index>)
  }

  ResumeRoute ({match, location}){
    return (<Resume global={this} match={match} location={location}></Resume>)
  }

  ProjectPageRoute ({match, location}) {
   return (<ProjectPage match={match} location={location}></ProjectPage>)
 }

  render() {
    return (
      <div>
      <Router basename="" hashType="noslash">
      <div className = "App">
      <Menu global={this} tab={this.state.tab}></Menu>
      <Route path="/" component={this.IndexRoute} />
      <Route path="/about" component={this.AboutRoute} />
      <Route path="/resume" component={this.ResumeRoute} />
      <div id="footer"><p><i>Site made with react.js by Connie</i></p>
      <a href="https://twitter.com/crabbage_"><img className="footer_icon" src={twitter}/></a>
      <a href="https://github.com/khanniie"><img className="footer_icon" src={github}/></a>
      </div>
      </div>

      </Router>
      </div>
    );
  }
}
export default App;
