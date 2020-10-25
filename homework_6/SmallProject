import React, { Component } from 'react';

//project class is a preview on the index page
class Project extends Component {

  constructor(props){
    super(props);
    this.state = {
      'show_descrip' : false
    }
    this.displayDescription = this.displayDescription.bind(this);
    this.hideDescription = this.hideDescription.bind(this);
  }

  displayDescription(){
    this.setState({'show_descrip': true});
  }

  hideDescription(){
    this.setState({'show_descrip': false});
  }

  render() {
      //the element wil be passed in from the gallery component as a prop
      const element = this.props.element;
      //make description
      const image_url = element.img_src;
      const show = this.state.show_descrip ? 'show_overlay' : 'hide_overlay';
      return (
            <div onMouseEnter={this.displayDescription} onMouseLeave={this.hideDescription}
            className="projects" key ={element.name} style={this.props.style}>
              <div className="container">
                <div className = 'img_container'>
                <div className = {"overlay" + " " + show}>
                <div className = 'overlay_text'>
                <p className="tools">{element.tools}</p>
                {element.description}</div></div>
                <img className="project_img"
                    src={process.env.PUBLIC_URL + '/images/' + image_url}
                    alt={element.name}
                  /></div>
                <p className="descrip">
                  {element.name}
                  <i className="des_date">{element.date}</i>
                </p>
              </div>
            </div>
          );
      };
}

export default Project;
