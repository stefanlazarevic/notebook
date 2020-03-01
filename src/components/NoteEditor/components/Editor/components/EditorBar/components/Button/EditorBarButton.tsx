import React from "react";

import "./EditorBarButton.css";
import { EditorBarButtonProps } from "./EditorBarButtonProps";

export default function EditorBarButton(props: EditorBarButtonProps) {
  function handleMouseDown(event: React.MouseEvent) {
    if (typeof props.onClick === "function") {
      props.onClick(event, props.action);
    }
  }

  return (
    <button
      className="EditorBarButton"
      title={props.title}
      onMouseDown={handleMouseDown}
    >
      {props.children || props.text}
    </button>
  );
}
