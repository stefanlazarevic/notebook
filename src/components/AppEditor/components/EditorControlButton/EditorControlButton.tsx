import React from "react";
import { EditorControlButtonProps } from "./EditorControlButtonProps";

import "./EditorControlButton.css";

export function EditorControlButton(props: EditorControlButtonProps) {
  function handleClickEvent(event: React.MouseEvent) {
    if (typeof props.onClick === "function") {
      props.onClick(event, props.command);
    }
  }

  return (
    <button
      className="EditorControlButton"
      title={props.title}
      tabIndex={props.tabIndex}
      onMouseDown={handleClickEvent}
      data-active={props.active}
    >
      {props.children}
    </button>
  );
}
