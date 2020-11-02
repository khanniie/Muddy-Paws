import React, { Component } from "react";
import customdata from "../data/data-all.js";
import Image from "./Image";
import { Link } from "react-router-dom";
import Dot from "./Dot";
import Checkmark from "./Checkmark";

import stars from "../images/stars.svg";

const data = customdata.products;

const RotationItem = (props) => {
  return (
    <div key={props.element.src} className="col">
      <Image
        style={{ backgroundColor: "white", border: "1px solid grey" }}
        src={props.element.imgs[0]}
        width={300}
        height={200}
        fill={false}
      />
      <h3>{props.element.name}</h3>
    </div>
  );
};

function findElement(url) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].url === url) return data[i];
  }
  return false;
}

const sizes = ["Tiny", "Small", "Medium", "Large"];

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 0,
      size: 0,
      quantity: 1,
      rotationItem: 2,
      added: false,
      addedWishlist: false,
    };

    if (props.location.state === undefined || props.location.state === null) {
      const url = props.match.params.id;
      console.log(url);
      if (
        url === "about" ||
        url === "browse" ||
        url === "cart" ||
        url === "contact" ||
        url === "account" ||
        url === "sale" ||
        url === "wishlist"
      ) {
        this.state.element = false;
      } else {
        this.state.element = findElement(url);
      }
    } else {
      this.state.element = props.location.state.element;
    }

    this.incrementQuant = this.incrementQuant.bind(this);
    this.decrementQuant = this.decrementQuant.bind(this);
    this.incrementRotation = this.incrementRotation.bind(this);
    this.decrementRotation = this.decrementRotation.bind(this);
  }

  incrementQuant = () => {
    this.setState((prevState) => {
      return { quantity: prevState.quantity + 1 };
    });
  };

  decrementQuant = () => {
    this.setState((prevState) => {
      return {
        quantity: prevState.quantity - 1 < 0 ? 0 : prevState.quantity - 1,
      };
    });
  };

  incrementRotation = () => {
    this.setState((prevState) => {
      let newIdx = prevState.rotationItem + 1;
      if (newIdx >= this.state.element.similar.length) {
        newIdx = 0;
      }
      return { rotationItem: newIdx };
    });
  };

  decrementRotation = () => {
    this.setState((prevState) => {
      let newIdx = prevState.rotationItem - 1;
      if (newIdx < 0) {
        newIdx = this.state.element.similar.length - 1;
      }
      return { rotationItem: newIdx };
    });
  };

  UNSAFE_componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let element = this.state.element;
    if (element === false) {
      return <span></span>;
    }
    return (
      <div id="content" className="product-detail">
        <div id="product-detail-main" className="row">
          <div className="left" id="product-image-container">
            <Image
              src={element.imgs[this.state.color]}
              width={500}
              height={600}
              fill={false}
              style={{ backgroundColor: "white", border: "1px solid grey" }}
            />
            <div className="row thumbnails">
              <a href={element.amazon}>image source</a>
            </div>
          </div>
          <div className="right">
            <div className="product-name">
              <h2>{element.name}</h2>
              <h2>
                {element.cost !== element.sale ? (
                  <span>
                    <span style={{ textDecoration: "line-through" }}>
                      {"$" + element.cost}
                    </span>
                    <span style={{ color: "var(--sale-color)" }}>
                      {" $" + element.sale}
                    </span>
                  </span>
                ) : (
                  <span>{"$" + element.cost}</span>
                )}
              </h2>
            </div>
            <div className="rating">
              <img src={stars} alt="stars" />
              <span>9 reviews</span>
            </div>
            <div className="body-content">{element.description}</div>
            <div className="colors">
              <p>
                <b>Selected: </b>
                {(
                  sizes[this.state.size] +
                  " " +
                  element.colors[this.state.color] +
                  " " +
                  element.name
                ).toLowerCase()}
              </p>
              <div className="dots">
                {element.colors.map((c, idx) => (
                  <Dot
                    key={c}
                    color={c}
                    activated={idx === this.state.color}
                    onClick={() => {
                      this.setState({ color: idx });
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="sizes row">
              {sizes.map((s, idx) => (
                <div
                  key={"sizes" + idx}
                  className={idx === this.state.size ? "activated" : ""}
                  onClick={() => this.setState({ size: idx })}
                >
                  {s}
                </div>
              ))}
              <p>Size guide</p>
            </div>
            <div className="cart-button row">
              <div id="number" className="row">
                <span onClick={this.decrementQuant}>-</span>
                <span>{this.state.quantity}</span>
                <span onClick={this.incrementQuant}>+</span>
              </div>
              {this.state.added ? (
                <button
                  onClick={() => {
                    this.props.global.addToCart([
                      element,
                      this.state.color,
                      this.state.size,
                      this.state.quantity,
                    ]);
                    this.setState({ added: true });
                  }}
                >
                  <div className="row" style={{ alignItems: "center" }}>
                    <span>Added</span>
                    <Checkmark />
                  </div>
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.global.addToCart([
                      element,
                      this.state.color,
                      this.state.size,
                      this.state.quantity,
                    ]);
                    this.setState({ added: true });
                  }}
                >
                  {" "}
                  <span>Add to cart</span>
                </button>
              )}
              {this.state.addedWishlist ? (
                <button
                  style={{ marginLeft: "var(--small-spacing)" }}
                  onClick={() => {
                    this.props.global.addToWishlist([
                      element,
                      this.state.color,
                      this.state.size,
                      this.state.quantity,
                    ]);
                    this.setState({ addedWishlist: true });
                  }}
                >
                  <div className="row" style={{ alignItems: "center" }}>
                    <span>In wishlist</span>
                    <Checkmark />
                  </div>
                </button>
              ) : (
                <button
                  style={{ marginLeft: "var(--small-spacing)" }}
                  onClick={() => {
                    this.props.global.addToWishlist([
                      element,
                      this.state.color,
                      this.state.size,
                      this.state.quantity,
                    ]);
                    this.setState({ addedWishlist: true });
                  }}
                >
                  <div className="row" style={{ alignItems: "center" }}>
                    <span>Add to wishlist</span>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="details">
          <div>
            Materials and specs <span>+</span>
          </div>
          <div>
            Care details <span>+</span>
          </div>
          <div>
            Shipping and returns <span>+</span>
          </div>
        </div>
        <div className="instagram section col">
          <b>See it on Instagram</b>
          <br />
          <i>Tag us with @MuddyPawsGear to be featured!</i>
          <div className="row" style={{ marginTop: "24px" }}>
            {element.instagram.map((i, idx) => (
              <Image
                style={idx === 0 ? {} : { marginLeft: "24px" }}
                src={i}
                key={"instagram" + idx}
                width={200}
                height={200}
                fill={true}
              />
            ))}
          </div>
        </div>
        <div className="reviews section col">
          <b>Reviews</b>
          <br />
          <div id="write-reviews">Write a review</div>
          <div id="load-more">Load more reviews</div>
          <div className="rating">
            <img src={stars} alt="stars" />
            <span>20 reviews</span>
          </div>
          <div className="row">
            <div className="col review">
              <p>Jean P.</p>
              <img src={stars} alt="stars" />
              <p>I love this backpack for my cat!</p>
            </div>
            <div className="col review">
              <p>Kath H.</p>
              <img src={stars} alt="stars" />
              <p>
                This backpack is easier to use than all of the others that I’ve
                bought before!
              </p>
            </div>
            <div className="col review">
              <p>Edna M.</p>
              <img src={stars} alt="stars" />
              <p>Great backpack!</p>
            </div>
            <div className="col review">
              <p>Lu H.</p>
              <img src={stars} alt="stars" />
              <p>Works well!</p>
            </div>
            <div className="col review">
              <p>Penny D.</p>
              <img src={stars} alt="stars" />
              <p>My pet looks really comfortable in it!</p>
            </div>
            <div className="col review">
              <p>C H.</p>
              <img src={stars} alt="stars" />
              <p>great...!</p>
            </div>
          </div>
        </div>
        <div style={{ padding: "var(--medium-spacing)" }}>
          <h1>Similar products</h1>
          <div
            className="row"
            style={{ marginTop: "var(--medium-spacing)", alignItems: "center" }}
          >
            <div className="rotation-button" onClick={this.decrementRotation}>
              {"<"}
            </div>
            <Link
              to={data[element.similar[this.state.rotationItem]].url}
              onClick={() => {
                window.scrollTo(0, 0);
                this.setState({
                  rotationItem: 0,
                  element: data[element.similar[this.state.rotationItem]],
                });
              }}
            >
              <RotationItem
                element={data[element.similar[this.state.rotationItem]]}
              ></RotationItem>
            </Link>
            <div className="rotation-button" onClick={this.incrementRotation}>
              {">"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectPage;
