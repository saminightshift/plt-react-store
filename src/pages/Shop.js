import React from "react";
import { Component } from "react";
import Products from "../components/Products";

export default class Shop extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Products />
      </>
    );
  }
}
