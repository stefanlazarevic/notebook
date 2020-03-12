import React from "react";

import "./ConfirmButton.css";

export default function ConfirmButton(props: any) {
  return (
    <button
      className="ConfirmButton"
      autoFocus={true}
      style={{ color: props.color }}
    >
      {props.text || "Confirm"}
    </button>
  );
}
