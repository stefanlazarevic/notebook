import React, { forwardRef, useImperativeHandle, useRef } from "react";

import "./NoteEditorHeaderInput.css";

import { NoteEditorHeaderInputProps } from "./NoteEditorHeaderInputProps";

const NoteEditorHeaderInput = forwardRef(
  (props: NoteEditorHeaderInputProps, ref: any) => {
    const inputRef = useRef<any>();

    useImperativeHandle(ref, () => ({
      getValue() {
        return inputRef.current ? inputRef.current.value : "";
      }
    }));

    return (
      <input
        type="text"
        className="NoteEditorHeaderInput"
        ref={inputRef}
        defaultValue={props.initialValue}
        placeholder="New title"
      />
    );
  }
);

export default NoteEditorHeaderInput;
