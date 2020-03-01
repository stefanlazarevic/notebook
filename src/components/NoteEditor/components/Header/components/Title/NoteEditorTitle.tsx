import React, { forwardRef, useImperativeHandle, useRef } from "react";

import "./NoteEditorTitle.css";

const EditorTitle = forwardRef((props: any, ref: any) => {
  const inputRef = useRef<any>();

  useImperativeHandle(ref, () => ({
    getValue() {
      return inputRef.current ? inputRef.current.value : "";
    }
  }));

  return (
    <input
      type="text"
      className="EditorTitle"
      ref={inputRef}
      defaultValue={props.initialValue}
      placeholder="New title"
    />
  );
});

export default EditorTitle;
