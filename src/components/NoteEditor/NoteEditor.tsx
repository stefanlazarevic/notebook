import React, { useState, useRef } from "react";

import "./NoteEditor.css";

import { NoteEditorHeader } from "./components/Header";
import Editor from "./components/Editor/Editor";
import { NoteRecord } from "../../redux/notes/records/types";
import { NoteEditorProps } from "./NoteEditorProps";
import utils from "../../utils";
import { NoteEditorFooter } from "./components/Footer";
import { RawDraftContentState } from "draft-js";

export default function NoteEditor(props: NoteEditorProps) {
  const [maximized, setMaximized] = useState(props.maximized);
  const titleRef = useRef<any>();
  const editorRef = useRef<any>();

  function toggleMaximizedState() {
    setMaximized(!maximized);
  }

  function getCanvasClassNames() {
    return ["NodeEditorCanvas", "theme-1", maximized ? "maximized" : ""].join(
      " "
    );
  }

  /**
   * 1. Perform validation before saving. (Optional)
   * 2. Generate unique not used ID.
   */
  function save() {
    let title = "";
    let content: RawDraftContentState = { entityMap: {}, blocks: [] };
    let id = props.id || utils.string.generateRandomString();

    if (titleRef && titleRef.current) {
      title = titleRef.current.getValue();
    }

    if (editorRef && editorRef.current) {
      content = editorRef.current.getHTML();
    }

    const record: NoteRecord = { id, title, content };

    if (typeof props.updateOrInsert === "function") {
      props.updateOrInsert(record);
    }
  }

  return (
    <div id="NoteEditor" className="NoteEditor__container">
      <div className="NoteEditor__wrapper">
        <div className={getCanvasClassNames().trim()}>
          <div className="NoteEditorCanvas__wrapper">
            <NoteEditorHeader
              maximized={maximized}
              onResize={toggleMaximizedState}
              onClose={props.close}
              ref={titleRef}
            />
            <Editor ref={editorRef} />
            <NoteEditorFooter onSave={save} />
          </div>
        </div>
      </div>
    </div>
  );
}
