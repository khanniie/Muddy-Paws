import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Menu from "./components/Menu";
import Sale from "./components/Sale";
import Browse from "./components/Browse";
import Image from "./components/Image";

import ProjectPage from "./components/ProjectPage";

import "./App.css";

const Body = () => (
  <div>
    <div id="see-more">See some more products below</div>
    <div id="top" className="section">
      <img
        className="wid-100 bg-img"
        src="assets/dog_and_leash.svg"
        alt="a dog and a hand holding a leash"
      />
      <div className="full-center">
        <div className="full-center">
          <h1>We make gear for pets who love adventure.</h1>
          <p>Each product is made by hand, custom fit to your pet's size.</p>
          <Link to="/browse" className="button important-button">
            Shop products
          </Link>
        </div>
      </div>
    </div>
    <div id="middle" className="section col">
      <div className="section top-bottom-margin">
        <img src="./assets/dog.png" alt="dog icon" />
        <div>
          <h1>Our Bestselling Harnesses</h1>
          <p>Super-comfortable, simple and resilient.</p>
        </div>
        <img src="./assets/cat.png" alt="cat with harness" />
      </div>
      <div className="section space-evenly">
        <div className="middle-product">
          <img src="./assets/cat_image.jpg" alt="cat icon" />
          <p>Perfect for introducing your cat to the outdoors.</p>
          <a href="./products/cat-harness" className="button">
            Learn more
          </a>
        </div>
        <div className="middle-product">
          <img src="./assets/dog_image.jpg" alt="dog with harness" />
          <p>A cushioned harness that will let your dog run free.</p>
          <a href="./products/dog-harness" className="button">
            Learn more
          </a>
        </div>
      </div>
    </div>
    <div id="bottom" className="section col">
      <h1>Harness attachments</h1>
      <div id="carousel" style={{ zIndex: 0 }}>
        <div id="carousel-bg" style={{ zIndex: 0 }}></div>
        <Image
          src="assets/dog_in_frame.png"
          width={500}
          height={300}
          fill={true}
          style={{ zIndex: 10, marginLeft: "50px" }}
        ></Image>
      </div>
      <a href="./products/food-attachment" className="button">
        See food attachment
      </a>
    </div>
  </div>
);

var doit;
const resize = function (updateWindowDimensions) {
  clearTimeout(doit);
  doit = setTimeout(updateWindowDimensions, 100);
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0, //starting width
      filter: null, //filter is null when we begin
    };
    this.match = props.match; //get match for making new path
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.body = document.getElementsByTagName("BODY")[0];
    this.ProjectPageRoute = this.ProjectPageRoute.bind(this);
    this.global = props.global;
    props.global.setState({ tab: "projects" });
  }
  //when component mounts, start listening for resizing so we can update project sizes
  componentDidMount() {
    this.updateWindowDimensions();
    this.global.setState({ tab: "projects" });
    window.addEventListener("resize", () =>
      resize(this.updateWindowDimensions)
    );
  }
  //when component unmounts, stop listening
  componentWillUnmount() {
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

  ProjectPageRoute({ match, location }) {
    return (
      <ProjectPage
        match={match}
        location={location}
        global={this.global}
      ></ProjectPage>
    );
  }

  render() {
    //this.global.setState({'tab':'projects'});
    //will route to the component returned by ProjectPageRoute if the link url is not exactly "/"
    //this is kind of maybe a problem for later because anything that matches "/*" gets matched
    //we render project gallery as normal if exactly "/"
    return (
      <div id="body-content">
        <Route
          path={`${this.match.path}:id`}
          component={this.ProjectPageRoute}
        />
        <Route exact path={this.match.path} render={() => <Body />} />
      </div>
    );
  }
}

class About extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.body = document.getElementsByTagName("BODY")[0];
    this.global = props.global;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.global.setState({ tab: "about" });
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
        height: window.innerHeight,
      });
    }
  }

  render() {
    return (
      <div id="about" className="row">
        <div className="col">
          <Image
            src="assets/about1.jpg"
            fill={true}
            width={this.state.width / 4}
            height={this.state.height / 3 - 10}
          />
          <Image
            src="assets/about2.jpg"
            fill={true}
            width={this.state.width / 4}
            height={this.state.height / 3 - 10}
          />
          <Image
            src="assets/about3.jpg"
            fill={true}
            width={this.state.width / 4}
            height={this.state.height / 3 - 10}
          />
        </div>
        <div className="col text">
          <h1>About</h1>
          <p>
            We are a small store that sells customizable hiking and adventuring
            gear for your cat or dog.
          </p>
          <p>
            We are committed to helping all cats and dogs live to their full
            potential, experiencing the wild alongside their human hiker pals!
          </p>
          <p>
            Our online store helps people buy our line of gear. Please take a
            look!
          </p>
          <h1>FAQ</h1>
          <p>
            <b>What's your return policy?</b>
          </p>
          <p>We do free returns for store credit within 30 days.</p>
        </div>
        <div className="col">
          <Image
            src="assets/about4.jpg"
            fill={true}
            width={this.state.width / 4}
            height={this.state.height / 3 - 10}
          />
          <Image
            src="assets/about5.jpg"
            fill={true}
            width={this.state.width / 4}
            height={this.state.height / 3 - 10}
          />
          <Image
            src="assets/about6.jpg"
            fill={true}
            width={this.state.width / 4}
            height={this.state.height / 3 - 10}
          />
        </div>
      </div>
    );
  }
}

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
          <h1>There's nothing in your cart just yet.</h1>
          <br />
          <Link to="/browse">
            <button style={{ marginTop: "12px" }}>Go to products page</button>
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
        <div style={{ alignSelf: "center" }}>
          <button onClick={props.removeItem} style={{ fontSize: "12px" }}>
            Remove item
          </button>
        </div>
      </div>
    </div>
  );
}

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.body = document.getElementsByTagName("BODY")[0];
    this.global = props.global;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.global.setState({ tab: "resume" });
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
    if (this.state.width < 600) {
      return (
        <div id="resume-page">
          <div className="warning">
            <p>
              Your screen size is too small to view the PDF, please either
              resize the page, or
              <br />
              <a href="https://www.dropbox.com/s/56hjgxii5l3iszy/constanceye_resume_feb_2019.pdf?dl=0">
                click on this to view it through Dropbox.
              </a>
            </p>
          </div>
        </div>
      );
    } else {
      return <div id="resume-page">resume</div>;
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "about",
      cart: [],
    };
    this.AboutRoute = this.AboutRoute.bind(this);
    this.BrowseRoute = this.BrowseRoute.bind(this);
    this.CartRoute = this.CartRoute.bind(this);
    this.ResumeRoute = this.ResumeRoute.bind(this);
    this.IndexRoute = this.IndexRoute.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  addToCart(item) {
    this.state.cart.push(item);
    this.setState({ cart: this.state.cart });
  }
  removeFromCart(idx) {
    this.state.cart.splice(idx, 1);
    this.setState({ cart: this.state.cart });
  }

  AboutRoute({ match, location }) {
    return <About global={this} match={match} location={location}></About>;
  }

  BrowseRoute({ match, location }) {
    return <Browse global={this} match={match} location={location}></Browse>;
  }

  IndexRoute({ match, location }) {
    return <Index global={this} match={match} location={location}></Index>;
  }

  ResumeRoute({ match, location }) {
    return <Resume global={this} match={match} location={location}></Resume>;
  }

  CartRoute({ match, location }) {
    return <Cart global={this} match={match} location={location}></Cart>;
  }

  SaleRoute({ match, location }) {
    return <Sale global={this} match={match} location={location}></Sale>;
  }

  ProjectPageRoute({ match, location }) {
    return <ProjectPage match={match} location={location}></ProjectPage>;
  }

  render() {
    return (
      <div>
        <Router basename="" hashType="noslash">
          <div className="App">
            <Menu
              global={this}
              tab={this.state.tab}
              cartItems={this.state.cart.length}
            ></Menu>
            <Route path="/about" component={this.AboutRoute} />
            <Route path="/resume" component={this.ResumeRoute} />
            <Route path="/browse" component={this.BrowseRoute} />
            <Route path="/cart" component={this.CartRoute} />
            <Route path="/sale" component={this.SaleRoute} />
            <Route path="/" component={this.IndexRoute} />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
