import React from "react";

import "./Button.css";

import { ButtonProps } from "./ButtonProps";

export default function Button(props: ButtonProps) {
  const classnames = ["Button", props.className];

  return (
    <button {...props} className={classnames.join("")}>
      {props.children}
    </button>
  );
}
