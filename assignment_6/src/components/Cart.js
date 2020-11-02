import React, { Component } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.body = document.getElementsByTagName("BODY")[0];
    this.global = props.global;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.global.setState({ tab: "cart" });
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
    if (this.global.state.cart.length === 0) {
      return (
        <div id="cart" className="col">
          <h1 style={{ maxWidth: "500px" }}>
            There's nothing in your cart just yet.
          </h1>
          <br />
          <Link to="/browse">
            <button style={{ marginTop: "12px" }}>Go to products page</button>
          </Link>
          <Link to="/wishlist">
            <button style={{ marginTop: "12px" }}>Go to wishlist</button>
          </Link>
        </div>
      );
    }

    let totalCost = 0;
    for (var i = 0; i < this.global.state.cart.length; i++) {
      totalCost += this.global.state.cart[i][0].sale;
    }

    return (
      <div id="cart" className="col">
        <h1>Your cart</h1>
        <Link to="/wishlist">
          <p
            style={{
              fontSize: "24px",
              fontStyle: "italic",
              textDecoration: "underline",
            }}
          >
            Go to wishlist
          </p>
        </Link>
        <div
          style={{ width: "40%", minWidth: "500px", marginTop: "48px" }}
          className="col"
        >
          {this.global.state.cart.map((c, idx) => (
            <CartItem
              key={c[0].url + idx}
              element={c}
              removeItem={() => this.global.removeFromCart(idx)}
            />
          ))}
          <div className="col fees">
            <p>
              <b>Cost:</b> ${totalCost}
            </p>
            <p>
              <b>Taxes:</b> $3
            </p>
            <p>
              <b>Shipping flat rate:</b> $5
            </p>
            <p>
              <b>Total Cost:</b> ${totalCost + 8}
            </p>
          </div>
          <button id="checkout">Checkout</button>
        </div>
      </div>
    );
  }
}

const sizes = ["Tiny", "Small", "Medium", "Large"];

function CartItem(props) {
  let element = props.element;
  return (
    <div className="row cart-item">
      <Image src={element[0].imgs[element[1]]} width={200} height={200} />
      <div
        className="row"
        style={{ justifyContent: "space-between", width: "calc(100% - 215px)" }}
      >
        <div className="col cart-info">
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
        </div>
      </div>
    </div>
  );
}

export default Cart;
