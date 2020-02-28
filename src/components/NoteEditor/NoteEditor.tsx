import React, { useState } from "react";

import "./NoteEditor.css";

import { NoteEditorHeader } from "./components/Header";
import Editor from "./components/Editor/Editor";

export default function NoteEditor(props: any) {
  const [maximized, setMaximized] = useState(props.maximized);

  function toggleMaximizedState() {
    setMaximized(!maximized);
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
            <NoteEditorHeader onResize={toggleMaximizedState} />
            <Editor />
          </div>
        </div>
      </div>
    </div>
  );
}
