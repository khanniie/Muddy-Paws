import React from "react";

const Dot = function (props) {
  let cla = props.color + " dot";
  if (props.activated) {
    cla += " activated";
  }
  return <div key={props.color} onClick={props.onClick} className={cla}></div>;
};

export default Dot;
