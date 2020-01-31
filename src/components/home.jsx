import React, { Component } from "react";
import Head from "./header";
import Category from "./category";
import Menu from "./menu";
import Cart from "./cart";
let data = require("../data/menu.json");
//let menu = require("../data/menu.json");
var price;
var c = data.map((d, index) => {
  return { id: index, data: d, counter: 0 };
});

class Home extends Component {
  state = {
    product: [...c]
  };
  findPrice = () => {
    price = 0;
    for (var x of this.state.product) {
      price = price + (x.counter > 0 ? x.data.price * x.counter : 0);
    }
    console.log("Price:", price);
    return price;
  };

  handleIncrement = id => {
    // console.log("Handle Increment Clicked");
    // console.log("Id: ", id);
    const product = [...this.state.product];
    const index = product.indexOf(id);
    // console.log("INdex on Increment:", index);
    product[index] = { ...id };
    //  console.log("Product [INdex]:", product[index]);
    product[index].counter++;
    this.setState({ product });
    //console.log("Product [INdex]:", product[index]);
  };

  handleDecrement = id => {
    console.log("Handle Decrement Clicked");
    const product = [...this.state.product];
    const index = product.indexOf(id);
    console.log(index);
    product[index] = { ...id };
    if (product[index].counter > 0) {
      product[index].counter--;
      this.setState({ product });
    }
    console.log("Product [INdex]:", product[index]);
  };

  render() {
    // console.log("Data in Product: ", this.state.product);
    return (
      <React.Fragment>
        <Head />
        <br />
        <div id="body">
          <Category />
          <div className="menu m-2">
            {this.state.product.map(d => {
              // console.log("Menu Id:", { index });
              // console.log("Mapping Data: ", d);
              return (
                <Menu
                  key={d.id}
                  data={d.data}
                  d={d}
                  counter={d.counter}
                  price={d.counter * d.data.price}
                  onDecrement={this.handleDecrement}
                  onIncrement={this.handleIncrement}
                ></Menu>
              );
            })}
          </div>

          {/* <Menu /> */}
          <Cart price={this.findPrice} />
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
