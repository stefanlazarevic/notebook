import React from "react";
import { FiMinimize, FiMaximize } from "react-icons/fi";

import "./ResizeButton.css";

import { ResizeButtonProps } from "./ResizeButtonProps";

export default function ResizeButton(props: ResizeButtonProps) {
  function handleResize(event: React.MouseEvent) {
    if (typeof props.onClick === "function") {
      props.onClick(!props.maximized);
    }
  }

  return (
    <button
      className="ResizeButton"
      onClick={handleResize}
      title={`${props.maximized ? "Minimize" : "Maximize"} Editor`}
    >
      {props.maximized ? <FiMinimize /> : <FiMaximize />}
    </button>
  );
}
