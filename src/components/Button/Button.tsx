import React from "react";

import "./Button.css";

import ButtonProps from "./ButtonProps";

export default function Button(props: ButtonProps) {
  const className = props.className ? `Button ${props.className}` : "Button";

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
}
