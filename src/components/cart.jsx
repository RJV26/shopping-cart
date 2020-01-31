import React, { Component } from "react";
//var price = 0;
class Cart extends Component {
  render() {
    return (
      <div className="cart m-2">
        <div id="ca">Your Cart</div>
        <h3 className="h3">Total</h3>{" "}
        <h4 className="h4">₹ {this.props.price()}</h4>
        <br />
        <button className="btn btn-warning m-2">Checkout</button>
      </div>
    );
  }
}

export default Cart;
