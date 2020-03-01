import React from "react";

import "./NoteEditorHeaderButton.css";

import { NoteEditorHeaderButtonProps } from "./NoteEditorHeaderButtonProps";

export default function NoteEditorHeaderButton(
  props: NoteEditorHeaderButtonProps
) {
  function handleClick() {
    if (typeof props.onClick === "function") {
      props.onClick();
    }
  }

  return (
    <button
      className="NoteEditorHeaderButton"
      onClick={handleClick}
      title={props.title}
      tabIndex={props.tabIndex}
    >
      {props.children || props.text}
    </button>
  );
}
