import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/ikons/plus";
import "../../styles/index.css";
import "../../styles/seller/Products.css";

let items = [1, 2, 3, 4, 5];

class Products extends Component {
  render() {
    return (
      <div className="App-container">
        {/* Product page header */}
        <div className="header header--product">
          <h1 className="header__title">Welcome.</h1>
          <p className="header__text">
            Keep track of and edit all your products. Happy selling!
            <span role="img" aria-label="100">
              💯
            </span>
          </p>
        </div>

        {/* Products grid */}
        <div className="grid">
          {/* Add product */}
          <div className="grid__add-item">
            <div className="grid__content">
              <Icon icon={plus} size={20} style={{ color: "#787878" }} />
              {/* <p className="grid__text">Add new</p> */}
            </div>
          </div>

          {/* Grid item */}
          {items.map((item, index) => (
            <div key={index} className="grid__item">
              <p className="grid__content">{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
