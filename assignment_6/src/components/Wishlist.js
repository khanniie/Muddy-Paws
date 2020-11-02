import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

class Wishlist extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.body = document.getElementsByTagName("BODY")[0];
    this.global = props.global;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.global.setState({ tab: "wishlist" });
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  //when component unmounts, stop listening
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
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
    if (this.global.state.wishlist.length === 0) {
      return (
        <div id="cart" className="col">
          <h1 style={{ maxWidth: "500px" }}>
            There's nothing in your wishlist just yet.
          </h1>
          <br />
          <Link to="/browse">
            <button style={{ marginTop: "12px" }}>Go to products page</button>
          </Link>
        </div>
      );
    }

    return (
      <div id="cart" className="col">
        <h1>Your wishlist</h1>
        <div
          style={{ width: "40%", minWidth: "500px", marginTop: "48px" }}
          className="col"
        >
          {this.global.state.wishlist.map((c, idx) => (
            <WishlistItem
              key={c[0].url + idx}
              element={c}
              removeItem={() => this.global.removeFromWishlist(idx)}
              addToCart={() => {
                this.global.addToCart(c);
                this.global.removeFromWishlist(idx);
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}

const sizes = ["Tiny", "Small", "Medium", "Large"];

function WishlistItem(props) {
  let element = props.element;
  return (
    <div className="row wishlist-item">
      <Image src={element[0].imgs[element[1]]} width={200} height={200} />
      <div
        className="row"
        style={{ justifyContent: "space-between", width: "calc(100% - 215px)" }}
      >
        <div className="col wishlist-info">
          <h3>{element[0].name}</h3>
          <p>Color: {element[0].colors[element[1]]}</p>
          <p>Size: {sizes[element[2]]}</p>
          {element[0].cost !== element[0].sale ? (
            <span>
              <span style={{ textDecoration: "line-through" }}>
                {"$" + element[0].cost}
              </span>
              <span style={{ color: "red" }}>{" $" + element[0].sale}</span>
            </span>
          ) : (
            <span>{"$" + element[0].cost}</span>
          )}
        </div>
        <div className="col" style={{ alignSelf: "center" }}>
          <p>Quantity: {element[3]}</p>
          <button onClick={props.removeItem} style={{ fontSize: "12px" }}>
            Remove item
          </button>
          <button
            onClick={props.addToCart}
            style={{ fontSize: "12px", marginTop: "8px" }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
