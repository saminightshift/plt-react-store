import React from "react";

import "../styles/button.styles.scss";

// Created this component to reuse app wide for all buttons

const Button = ({ children, inverted, ...props }) => (
  <button className={`${inverted ? "inverted" : ""} button`} {...props}>
    {children}
  </button>
);

export default Button;
