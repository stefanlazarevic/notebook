import React, { useState, useRef, useEffect } from "react";
import { RawDraftContentState } from "draft-js";

import "./NoteEditor.css";

import utils from "../../utils";

import Editor from "./components/Editor/Editor";
import { NoteEditorHeader } from "./components/Header";
import { NoteRecord } from "../../redux/notes/records/types";
import { NoteEditorProps } from "./NoteEditorProps";
import { NoteEditorFooter } from "./components/Footer";
import KeyCodeMap from "./components/Editor/KeyBindings";

export default function NoteEditor(props: NoteEditorProps) {
  const [maximized, setMaximized] = useState(props.maximized);
  const titleRef = useRef<any>();
  const editorRef = useRef<any>();
  const saveIntervalRef = useRef<NodeJS.Timeout>();

  function toggleMaximizedState() {
    setMaximized(!maximized);
  }

  function getCanvasClassNames() {
    return ["NodeEditorCanvas", maximized ? "maximized" : ""].join(" ");
  }

  function handleNoteEditorChange() {
    if (saveIntervalRef.current) {
      clearTimeout(saveIntervalRef.current);
    }

    if (props.autoSave && props.id) {
      saveIntervalRef.current = setTimeout(() => {
        save();
      }, 5000);
    }
  }

  useEffect(() => {
    return function componentWillUnmount() {
      if (saveIntervalRef.current) {
        clearTimeout(saveIntervalRef.current);
      }
    };
  });

  function handleContainerKeyDown(event: React.KeyboardEvent<any>) {
    const isControlKey = event.ctrlKey;
    const isShiftKey = event.shiftKey;
    const keyCode = event.keyCode;
    const key = KeyCodeMap.get(keyCode);

    if (isControlKey && !isShiftKey && key === "s") {
      event.preventDefault();

      if (saveIntervalRef.current) {
        clearTimeout(saveIntervalRef.current);
      }

      save();
    }
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

      if (props.saveAndClose && !props.autoSave) {
        props.close();
      }
    }
  }

  return (
    <div
      id="NoteEditor"
      className="NoteEditor__container"
      onKeyDown={handleContainerKeyDown}
    >
      <div className="NoteEditor__wrapper">
        <div className={getCanvasClassNames().trim()}>
          <div className="NoteEditorCanvas__wrapper">
            <NoteEditorHeader
              maximized={maximized}
              onResize={toggleMaximizedState}
              onClose={props.close}
              ref={titleRef}
              onChange={handleNoteEditorChange}
            />
            <Editor
              ref={editorRef}
              spellCheck={props.spellCheck}
              onChange={handleNoteEditorChange}
            />
            <NoteEditorFooter onSave={save} />
          </div>
        </div>
      </div>
    </div>
  );
}
