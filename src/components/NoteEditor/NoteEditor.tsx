import React, { useState, useRef } from "react";

import "./NoteEditor.css";

import { NoteEditorHeader } from "./components/Header";
import Editor from "./components/Editor/Editor";
import { NoteRecord } from "../../redux/notes/records/types";

export default function NoteEditor(props: any) {
  const [maximized, setMaximized] = useState(props.maximized);
  const titleRef = useRef<any>();
  const editorRef = useRef<any>();

  function toggleMaximizedState() {
    setMaximized(!maximized);
  }

  function save() {
    let title = "";
    let content = "";

    if (titleRef && titleRef.current) {
      title = titleRef.current.getValue();
    }

    if (editorRef && editorRef.current) {
      content = editorRef.current.getPlainText();
    }

    const record: NoteRecord = { id: "test", title, content };

    console.log("Save", record);
  }

  return (
    <div id="NoteEditor" className="NoteEditor__container">
      <div className="NoteEditor__wrapper">
        <div
          className={`NoteEditor__canvas ${
            maximized ? "maximized" : ""
          }`.trim()}
        >
          <div className="NoteEditorCanvas__wrapper">
            <NoteEditorHeader onResize={toggleMaximizedState} ref={titleRef} />
            <Editor ref={editorRef} />
            <button onClick={save}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
