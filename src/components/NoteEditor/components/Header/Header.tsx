import React from "react";

import "./NoteEditorHeader.css";

import { MdClose } from "react-icons/md";
import { FiMinimize, FiMaximize } from "react-icons/fi";

export default function NoteEditorHeader(props: any) {
  return (
    <header id="NoteEditorHeader" className="NoteEditorHeader">
      <button
        className="NoteEditorHeader__button"
        title="Close"
        tabIndex={2}
        onClick={props.onClose}
      >
        <MdClose className="icon" />
      </button>
      <button
        className="NoteEditorHeader__button"
        title={props.maximized ? "Minimize" : "Maximize"}
        tabIndex={1}
        onClick={props.onResize}
      >
        {props.maximized ? (
          <FiMinimize className="icon" />
        ) : (
          <FiMaximize className="icon" />
        )}
      </button>
    </header>
  );
}
