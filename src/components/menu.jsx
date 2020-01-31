import React, { Component } from "react";

class Menu extends Component {
  // handleIncrement = () => {
  //   this.setState(
  //     { count: count + 1 },
  //     this.props.handleIncrement(this.props.data.id, this.state.count)
  //   );
  // };
  // this.setState(state => ({
  //   count: state.count + 1,
  //   price: this.props.price * state.count
  // }));

  //   console.log("Count + 1:", this.state.count);
  //   // this.setState({ price: this.props.price * this.state.count });
  //   console.log("Count after Price:", this.state.count);
  //   console.log("Price:", this.state.price);
  // };
  // handleDecrement = () => {
  //   if (this.state.count > 0) {
  //     this.setState({ count: this.state.count - 1 }, () => {
  //       this.setState({ price: this.props.price * this.state.count });
  //     });
  //   }
  // };

  check(d) {
    if (d === "veg") return <div id="ovalg"></div>;
    else return <div id="ovalr"></div>;
  }

  render() {
    //console.log("props: ", this.props);
    return (
      <React.Fragment>
        <div className="mitem">
          {this.check(this.props.data.vegflag)}
          <h6 className="m5">{this.props.data.name}</h6>
          <span id="right">
            <button
              className=" badge-danger"
              onClick={() => this.props.onDecrement(this.props.d)}
            >
              -
            </button>
            <span id="m">{this.props.counter} </span>
            <button
              className=" badge-success"
              onClick={() => this.props.onIncrement(this.props.d)}
            >
              +
            </button>
            <div className="amt">₹ {this.props.price}</div>
          </span>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Menu;
