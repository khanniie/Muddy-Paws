import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Project from './Project'
import SmallProject from './SmallProject'

//the project data stored in data-all.js
import customdata from '../data/data-all.js';
const data = customdata.test;

//masonry is the module that makes the pintrest style layout
const masonryOptions = {
    transitionDuration: 150, //150 millisecond delay
    gutter: 40 //30 px between items in layout
};

// Gallery is the collection of project items in masonry format
class Gallery extends Component {

    imagesLoaded(){
      if(!this.state.loaded){
        this.setState({'loaded' : true});
      }

    }

    fadeIn(){
      if(this.state.fadedIn != 'fadedIn' && this.state.loaded)
        this.setState({'fadedIn' : 'fadedIn', 'hidden': 'hidden'})
    }

    constructor(props) {
      super(props);
      //the match from the router is passed in as a prop from the Index component
      //going to use this.match to make links for the projects
      this.match = props.match;
      this.state = {
        'fadedIn' : '',
        'hidden' : '',
        'loaded' : false
      }
      this.fadeIn = this.fadeIn.bind(this);
      this.imagesLoaded = this.imagesLoaded.bind(this);

    }

    render() {
        //code below sets the project widths to "fill" the entire space so they're spaced evenly and
        //maximize the space they occupy
        //this makes it lag a little when you resize the page but I haven't found a more efficient solution
        //^^^ I guess that's because I wasn't looking very hard
        const current_wid = this.props.wid; //get current width of innerWidth from window, which is passed in as a prop
        let ele_wid; //ultimate width for element
        if (current_wid >= 960) {
          //there's a gutter of 60 since it's three elements in a row
          //having a margin of 10% on both sides means the actual gallery space is only 80%
          //thus we do current_wid * 0.8 - 60
          ele_wid = (current_wid  * 0.75 - 80) / 3;
        } else if (current_wid >= 660){
          //same logic as above, only since it's just two elements in a row it will be 30
          ele_wid = (current_wid * 0.75 - 40) / 2;
        } else {
          //one element in a row, mobile friendly
          ele_wid = current_wid * 0.75;
        }
        const style = {width: ele_wid + 'px'} //the final width for the project is put into a style object

        //filter item is passed in as a prop -> it's either a string or null
        const filter = this.props.filter;
        //below we check if there's a filter selected if yes, we filter for it from the list of projects
        const filtered = (filter == null ? data : data.filter(item => item.tags.includes(filter)));

        const match = this.match; //get match so we can make paths for projects
        //map items in data into Project components that are wrapped in a Link
        //using a dummy div with a key to satisfy masonry's need for unique keys
        let childElements = []
        const style_dummy = {width: ele_wid + 'px', height: '0px'}
        childElements.push((<div style={style_dummy} key="dummy"></div>));
        let childElementsp = filtered.map(function(element){
           var descrip = element.name + " " + element.date + ": " + element.description;
           var project = (current_wid < 660) ? (<SmallProject element={element} style={style} ></SmallProject>) : (<Project element={element} style={style} ></Project>);
            return (
              <div key={element.key}>
                <Link to={{pathname:`${match.url}` + element.url, state:{element:element}}}>
                  {project}
                </Link>
              </div>
            );
        });
        childElements = childElements.concat(childElementsp)
        //now that we have our childElements, put them into Masonry object
        return (
          <div>
          <div id="loading" className={this.state.hidden}><i>loading elements...</i></div>
          <Masonry
            onImagesLoaded={this.imagesLoaded}
            onLayoutComplete={this.fadeIn}
            className={'my-gallery-class ' + this.state.fadedIn} // default ''
            elementType={'div'} // default 'div'
            options={masonryOptions} // default {}
            disableImagesLoaded={false} // default false
            updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
          >
            {childElements}
          </Masonry></div>);
    }
}

export default Gallery;
