import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this.onL = this.onL.bind(this);
  }

  onL(e) {
    this.setState({ width: e.target.width, height: e.target.height });
  }

  render() {
    const src = this.props.src;
    const wid = this.props.width;
    const hei = this.props.height;
    const fill = this.props.fill;
    let p_style = this.props.style;
    let n_style = { width: wid + "px", height: hei + "px", overflow: "hidden" };
    let style = Object.assign({}, n_style, p_style);
    let s_style = {};
    let containerAspectRatio = wid / hei;

    if (this.state.width > 0) {
      if (fill) {
        let aspectRatio = this.state.width / this.state.height;
        if (aspectRatio < containerAspectRatio) {
          let shift = (hei - (wid / this.state.width) * this.state.height) / 2;
          s_style = {
            width: "100%",
            transform: "translate3d(0px, " + shift + "px, 0px)",
          };
        } else {
          let shift = (wid - (hei / this.state.height) * this.state.width) / 2;
          s_style = {
            height: "100%",
            transform: "translate3d(" + shift + "px, 0px, 0px)",
          };
        }
      } else {
        let aspectRatio = this.state.width / this.state.height;
        if (aspectRatio > containerAspectRatio) {
          let shift = (hei - (wid / this.state.width) * this.state.height) / 2;
          s_style = {
            width: "100%",
            transform: "translate3d(0px, " + shift + "px, 0px)",
          };
        } else {
          let shift = (wid - (hei / this.state.height) * this.state.width) / 2;
          s_style = {
            height: "100%",
            transform: "translate3d(" + shift + "px, 0px, 0px)",
          };
        }
      }
    }

    return (
      <div style={style} className="img-c">
        <img src={src} alt="" style={s_style} onLoad={(e) => this.onL(e)} />
      </div>
    );
  }
}

export default Image;
