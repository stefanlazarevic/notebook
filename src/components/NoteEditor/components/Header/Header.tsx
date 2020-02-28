import React, { forwardRef } from "react";
import { MdClose } from "react-icons/md";
import { FiMinimize, FiMaximize } from "react-icons/fi";

import "./NoteEditorHeader.css";

import EditorTitle from "./components/Title/EditorTitle";

const NoteEditorHeader = forwardRef((props: any, ref: any) => {
  return (
    <header id="NoteEditorHeader" className="NoteEditorHeader">
      <button
        className="NoteEditorHeader__button"
        title="Close"
        tabIndex={3}
        onClick={props.onClose}
      >
        <MdClose className="icon" />
      </button>
      <button
        className="NoteEditorHeader__button"
        title={props.maximized ? "Minimize" : "Maximize"}
        tabIndex={2}
        onClick={props.onResize}
      >
        {props.maximized ? (
          <FiMinimize className="icon" />
        ) : (
          <FiMaximize className="icon" />
        )}
      </button>
      <EditorTitle ref={ref} />
    </header>
  );
});

export default NoteEditorHeader;
