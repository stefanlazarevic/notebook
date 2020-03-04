import React from "react";

import "./AppHeaderButton.css";

import { AppHeaderButtonProps } from "./AppHeaderButtonProps";

export default function AppHeaderButton(props: AppHeaderButtonProps) {
  return (
    <button
      className="AppHeaderButton"
      disabled={props.disabled}
      title={props.title}
    >
      {props.children}
    </button>
  );
}
