import React, { Component } from "react";
//import Menu from"./menu";
let data = require("../data/menu.json");

let cat = new Set();
let arr = [];
class Category extends Component {
  state = {};

  UNSAFE_componentWillMount() {
    data.forEach(element => {
      cat.add(element.category);
    });

    // console.log(cat);
    arr = [...cat];

    // console.log(arr);
  }

  render() {
    return (
      <React.Fragment>
        <div id="categoryhead">
          <div id="c">Category</div>
          <ul>
            {arr.map((e, index) => {
              return (
                <li key={index}>
                  <button className="button">{e}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Category;
