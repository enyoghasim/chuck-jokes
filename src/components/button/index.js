import React from "react";
import "./index.scss";

const Button = (props) => {
  const { className, variant, children, ...newProps } = props;
  return (
    <button
      {...newProps}
      className={`${className ? className : ""} ${
        variant ? variant : "primary"
      } button`}
    >
      {props.children}
    </button>
  );
};

export default Button;
