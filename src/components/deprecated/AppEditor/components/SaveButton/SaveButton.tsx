import React from "react";
import { FaRegSave } from "react-icons/fa";

import "./SaveButton.css";

export default function ResizeButton(props: any) {
  function onClick(event: React.MouseEvent) {
    if (typeof props.onClick === "function") {
      props.onClick();
    }
  }

  return (
    <button
      className="SaveButton"
      onClick={onClick}
      title="Save"
      aria-label="Save"
    >
      <FaRegSave />
    </button>
  );
}
