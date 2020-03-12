import React from "react";

import "./DenyButton.css";

export default function DenyButton(props: any) {
  return (
    <button className="DenyButton" onClick={props.onClick}>
      {props.text || "Deny"}
    </button>
  );
}
