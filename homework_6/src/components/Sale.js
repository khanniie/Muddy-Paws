import React, { Component } from "react";
import customdata from "../data/data-all.js";
import { ProductItem } from "./Browse";

const data = customdata.products;
const saleItems = data.filter((item) => item.cost !== item.sale);

var doit;
const resize = function (updateWindowDimensions) {
  clearTimeout(doit);
  doit = setTimeout(updateWindowDimensions, 100);
};

class Sale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0, //starting width
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  //when component mounts, start listening for resizing so we can update project sizes
  UNSAFE_componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", () =>
      resize(this.updateWindowDimensions)
    );
  }
  //when component unmounts, stop listening
  UNSAFE_componentWillUnmount() {
    window.removeEventListener("resize", () =>
      resize(this.updateWindowDimensions)
    );
    //this.togglebutton.removeEventListener('click', this.togglebutton);
  }
  //puts new height/width into state and triggers rerender
  updateWindowDimensions() {
    if (this.body != null) {
      this.setState({
        width: this.body.clientWidth,
        height: this.body.clientHeight,
      });
    }
  }

  render() {
    return (
      <div id="content">
        <h2>Sale</h2>
        <p>Enjoy substantial discounts on a few of our products as part of our Fall sale!</p>
        <div className="products">
          {saleItems.map((element) => (
            <ProductItem key={element.url} element={element} />
          ))}
        </div>
      </div>
    );
  }
}

export default Sale;
