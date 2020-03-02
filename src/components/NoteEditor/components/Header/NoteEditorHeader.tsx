import React, { forwardRef } from "react";
import { MdClose } from "react-icons/md";
import { FiMinimize, FiMaximize } from "react-icons/fi";

import "./NoteEditorHeader.css";

import NoteEditorHeaderInput from "./components/Title/NoteEditorHeaderInput";
import { NoteEditorHeaderProps } from "./NoteEditorHeaderProps";
import NoteEditorHeaderButton from "./components/Button/NoteEditorHeaderButton";
import SavedContentBubble from "./components/SavedContentBubble/SavedContentBubble";

const NoteEditorHeader = forwardRef(
  (props: NoteEditorHeaderProps, ref: any) => {
    return (
      <header id="NoteEditorHeader" className="NoteEditorHeader">
        <NoteEditorHeaderInput ref={ref} onChange={props.onChange} />
        <SavedContentBubble saved={props.saved} />
        <NoteEditorHeaderButton
          title={props.maximized ? "Minimize" : "Maximize"}
          onClick={props.onResize}
        >
          {props.maximized ? (
            <FiMinimize className="icon" />
          ) : (
            <FiMaximize className="icon" />
          )}
        </NoteEditorHeaderButton>
        <NoteEditorHeaderButton title="Close" onClick={props.onClose}>
          <MdClose className="icon" />
        </NoteEditorHeaderButton>
      </header>
    );
  }
);

export default NoteEditorHeader;
