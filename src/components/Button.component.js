import React from "react";

import "../styles/button.styles.scss";

// Created this component to reuse app wide for all buttons

const Button = ({ children, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
