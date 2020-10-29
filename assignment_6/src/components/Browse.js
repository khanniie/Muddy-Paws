import React, { Component } from "react";
import { Link } from "react-router-dom";
import customdata from "../data/data-all.js";
import Image from "./Image";
import Dot from "./Dot";

const main = customdata.products.filter((item) => item.type === "main");
const attachment = customdata.products.filter(
  (item) => item.type === "attachment"
);

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 0,
    };
  }

  render() {
    return (
      <div key={this.props.element.url} className="product-item">
        <Link
          to={{
            pathname: this.props.element.url,
            state: { element: this.props.element },
          }}
        >
          <Image
            src={this.props.element.imgs[this.state.color]}
            width={300}
            height={200}
            fill={false}
            style={{
              backgroundColor: "white",
              border: "1px solid rgba(0, 0, 0, 0.2)",
            }}
          ></Image>
          <div className="title">
            <span className="dog-name">{this.props.element.name}</span>
            {this.props.element.cost !== this.props.element.sale ? (
              <span>
                <span style={{ textDecoration: "line-through" }}>
                  {"$" + this.props.element.cost}
                </span>
                <span style={{ color: "var(--sale-color)" }}>
                  {" $" + this.props.element.sale}
                </span>
              </span>
            ) : (
              <span>{"$" + this.props.element.cost}</span>
            )}
          </div>
        </Link>
        <div className="dots">
          {this.props.element.colors.map((c, idx) => (
            <Dot
              key={c + "idx"}
              color={c}
              activated={idx === this.state.color}
              onClick={() => {
                this.setState({ color: idx });
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

var doit;
const resize = function (updateWindowDimensions) {
  clearTimeout(doit);
  doit = setTimeout(updateWindowDimensions, 100);
};

class Browse extends Component {
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
        <h2>Adventure Gear</h2>
        <div className="products">
          {main.map((element) => (
            <ProductItem key={element.url} element={element} />
          ))}
        </div>
        <h2>Harness attachments</h2>
        <div className="products">
          {attachment.map((element) => (
            <ProductItem key={element.url} element={element} />
          ))}
        </div>
      </div>
    );
  }
}
export { ProductItem };
export default Browse;
