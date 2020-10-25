import React, { Component } from 'react';
import customdata from '../data/data-all.js';
const ReactDOM = require('react-dom')
const ReactMarkdown = require('react-markdown/with-html')

const data = customdata.test;


function findElement(url){
  for (var i = 0; i < data.length; i++){
    if(data[i].url === url) return data[i];
  }
  return false;
}

class ProjectPage extends Component {
  componentDidMount(){
    window.scrollTo(0, 0);
  }
  render() {
    let element;
    if(this.props.location.state == null){
      const url = this.props.match.params.id;
      if(url === "about" || url === "resume") return (<div></div>);
      element = findElement(url);
      if(element == false){
        return (<div>Item not found!</div>);
      }
    } else {
      element = this.props.location.state.element;
    }
    const preview_url = element.preview_url;
    let preview;
    if (element.preview_type === 'video') {
      preview = (<iframe width="560" height="315" src={preview_url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>);
    } else if (element.preview_type === 'vimeo'){
      preview = (<iframe src={preview_url} width="640" height="400" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>);
    } else if (element.preview_type === 'image') {
      preview = (<img src={preview_url}/>);
    } else {
      preview = (<div></div>);
    }
    const markdown = element.mark;
    console.log(element, markdown);
    return (
      <div>
      <div className="project_page_body">
      <h1 className="element_name">{element.name}<i className="des_date">{element.date}</i></h1>
      <h3>{element.tools}</h3>
      <div>{preview}</div>
      <div>
      <ReactMarkdown
          className="markdown"
          source={markdown}
          escapeHtml={false}/>
      </div>
      </div>
      </div>
    );
  }
}


export default ProjectPage
