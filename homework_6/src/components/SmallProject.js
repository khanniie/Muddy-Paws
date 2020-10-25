import React, { Component } from 'react';

//project class is a preview on the index page
class SmallProject extends Component {

  constructor(props){
    super(props);
  }

  render() {
      //the element wil be passed in from the gallery component as a prop
      const element = this.props.element;
      //make description
      const image_url = element.img_src;
      return (
            <div className="projects" key ={element.name} style={this.props.style}>
              <div className="container">
                <div className = 'img_container'>
                  <img className="project_img"
                      src={process.env.PUBLIC_URL + '/images/' + image_url}
                      alt={element.name}
                    />
                </div>
                <div className="descrip-small">
                  {element.name}
                  <i className="des_date">{element.date}</i>
                  <p className="tools">{element.tools}</p>
                  {element.description}
                </div>
              </div>
            </div>
          );
      };
}

export default SmallProject;
