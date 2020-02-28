import React, { useState } from "react";

import "./NoteEditor.css";

import { NoteEditorHeader } from "./components/Header";

export default function NoteEditor(props: any) {
  const [maximized, setMaximized] = useState(props.maximized);

  function toggleMaximizedState() {
    setMaximized(!maximized);
  }

  return (
    <div id="NoteEditor" className="NoteEditor__container">
      <div className="NoteEditor__wrapper">
        <div className={`NoteEditor__canvas ${maximized && "maximized"}`}>
          <NoteEditorHeader onResize={toggleMaximizedState} />
        </div>
      </div>
    </div>
  );
}
