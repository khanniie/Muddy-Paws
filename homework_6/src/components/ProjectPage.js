import React, { Component } from "react";
import customdata from "../data/data-all.js";
import Image from "./Image";
import Dot from "./Dot";
import stars from "../images/stars.svg";

const data = customdata.products;

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
    };

    this.incrementQuant = this.incrementQuant.bind(this);
    this.decrementQuant = this.decrementQuant.bind(this);
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

  UNSAFE_componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    let element;
    if (
      this.props.location.state === undefined ||
      this.props.location.state === null
    ) {
      const url = this.props.match.params.id;
      if (
        url === "about" ||
        url === "browse" ||
        url === "cart" ||
        url === "contact" ||
        url === "account" ||
        url === "sale"
      ) {
        return <span></span>;
      }
      element = findElement(url);
      if (element === false) {
        return <div>Item not found!</div>;
      }
    } else {
      element = this.props.location.state.element;
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
              <p>Color: {element.colors[this.state.color]}</p>
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
              <button
                onClick={() =>
                  this.props.global.addToCart([
                    element,
                    this.state.color,
                    this.state.size,
                    this.state.quantity,
                  ])
                }
              >
                Add to cart
              </button>
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
      </div>
    );
  }
}

export default ProjectPage;
