import React, { forwardRef } from "react";
import { MdClose } from "react-icons/md";
import { FiMinimize, FiMaximize } from "react-icons/fi";

import "./NoteEditorHeader.css";

import NoteEditorTitle from "./components/Title/NoteEditorTitle";
import { NoteEditorHeaderProps } from "./NoteEditorHeaderProps";

const NoteEditorHeader = forwardRef(
  (props: NoteEditorHeaderProps, ref: any) => {
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
        <NoteEditorTitle ref={ref} />
      </header>
    );
  }
);

export default NoteEditorHeader;
