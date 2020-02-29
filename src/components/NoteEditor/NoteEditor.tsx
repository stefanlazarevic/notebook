import React, { useState, useRef } from "react";

import "./NoteEditor.css";

import { NoteEditorHeader } from "./components/Header";
import Editor from "./components/Editor/Editor";
import { NoteRecord } from "../../redux/notes/records/types";
import { NoteEditorProps } from "./NoteEditorProps";
import utils from "../../utils";

export default function NoteEditor(props: NoteEditorProps) {
  const [maximized, setMaximized] = useState(props.maximized);
  const titleRef = useRef<any>();
  const editorRef = useRef<any>();

  function toggleMaximizedState() {
    setMaximized(!maximized);
  }

  function save() {
    let title = "";
    let content = "";
    let id = props.id || utils.string.generateRandomString();

    if (titleRef && titleRef.current) {
      title = titleRef.current.getValue();
    }

    if (editorRef && editorRef.current) {
      content = editorRef.current.getPlainText();
    }

    const record: NoteRecord = { id, title, content };

    if (typeof props.updateOrInsert === "function") {
      props.updateOrInsert(record);
    }
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
            <NoteEditorHeader
              onResize={toggleMaximizedState}
              onClose={props.close}
              ref={titleRef}
            />
            <Editor ref={editorRef} />
            <button onClick={save}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
