import React, { useState, useRef } from "react";
import { RawDraftContentState } from "draft-js";

import "./NoteEditor.css";

import utils from "../../utils";

import Editor from "./components/Editor/Editor";
import { NoteEditorHeader } from "./components/Header";
import { NoteRecord } from "../../redux/notes/records/types";
import { NoteEditorProps } from "./NoteEditorProps";
import { NoteEditorFooter } from "./components/Footer";
import KeyCodeMap from "./components/Editor/KeyBindings";
import { TitleReference, EditorReference } from "./NoteEditorReferences";

export default function NoteEditor(props: NoteEditorProps) {
  const [maximized, setMaximized] = useState(Boolean(props.maximized));
  const [saved, setSaved] = useState(Boolean(props.id));

  const titleReference = useRef<TitleReference>();
  const editorReference = useRef<EditorReference>();
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

    if (props.autoSave && Boolean(props.id)) {
      saveIntervalRef.current = setTimeout(() => {
        save();
      }, 5000);
    }

    if (saved) {
      setSaved(false);
    }
  }

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
    let id = props.id || utils.string.generateRandom();

    if (titleReference && titleReference.current) {
      title = titleReference.current.getValue();
    }

    if (editorReference && editorReference.current) {
      content = editorReference.current.getRawDraftContentState();
    }

    const record: NoteRecord = { id, title, content };

    if (typeof props.updateOrInsert === "function") {
      props.updateOrInsert(record);

      if (props.saveAndClose && !props.autoSave) {
        props.close();
      }

      setSaved(true);
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
              ref={titleReference}
              onChange={handleNoteEditorChange}
              id={props.id}
              saved={saved}
            />
            <Editor
              ref={editorReference}
              spellCheck={props.spellCheck}
              onChange={handleNoteEditorChange}
              saved={saved}
            />
            <NoteEditorFooter onSave={save} />
          </div>
        </div>
      </div>
    </div>
  );
}
