import React from "react";

import "./Button.css";

import { ButtonProps } from "./ButtonProps";

export default function Button(props: ButtonProps) {
  return (
    <button {...props} className="Button">
      {props.children}
    </button>
  );
}
