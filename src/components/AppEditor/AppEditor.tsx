import React, { useState, useRef } from "react";

import "./AppEditor.css";

import { AppEditorProps } from "./AppEditorProps";
import { NameInputReference, EditorReference } from "./AppEditorReferences";

import AppEditorHeader from "./layout/Header/Header";
import Editor from "./layout/Editor/Editor";
import { ChangeIndicatorState } from "./components/ChangeIndicator/ChangeIndicatorProps";
import { NoteRecord } from "../../redux/notes/records/types";
import utils from "../../utils";
import { KeycodeMap } from "./layout/Editor/Shortcuts";

export default function AppEditor(props: AppEditorProps) {
  const [maximized, setMaximized] = useState(props.maximized);
  const [indicatorState, setIndicatorState] = useState(
    ChangeIndicatorState.IDLE
  );

  const nameInputReference = useRef<NameInputReference>();

  const editorReference = useRef<EditorReference>();

  const saveTimeoutReference = useRef<NodeJS.Timeout>();

  function save() {
    if (saveTimeoutReference.current) {
      clearTimeout(saveTimeoutReference.current);
    }

    const record: NoteRecord = {
      id: props.id || utils.string.generateRandom(),
      parent: props.currentGroupID,
      title: "",
      content: { entityMap: {}, blocks: [] },
      type: "Note",
      createdAt: Date.now()
    };

    if (nameInputReference.current) {
      record.title = nameInputReference.current.getValue();
    }

    if (editorReference.current) {
      record.content = editorReference.current.getRawDraftContentState();
    }

    if (typeof props.onSave === "function" && !props.id) {
      props.onSave(props.currentGroupID, record);

      if (props.saveAndClose && !props.autoSave) {
        closeEditor();
      } else {
        setIndicatorState(ChangeIndicatorState.SAVED);
      }

      return;
    }

    if (typeof props.onUpdate === "function" && props.id) {
      record.updatedAt = Date.now();
      props.onUpdate(record);

      if (props.saveAndClose && !props.autoSave) {
        closeEditor();
      } else {
        setIndicatorState(ChangeIndicatorState.SAVED);
      }
    }
  }

  function handleCanvasKeyDown(event: React.KeyboardEvent<any>) {
    const isControlKey = event.ctrlKey;
    const isShiftKey = event.shiftKey;
    const keyCode = event.keyCode;
    const key = KeycodeMap[keyCode];

    if (isControlKey && !isShiftKey && key === "s") {
      event.preventDefault();

      if (saveTimeoutReference.current) {
        clearTimeout(saveTimeoutReference.current);
      }
      if (indicatorState === ChangeIndicatorState.UNSAVED) {
        save();
      }
    }

    if (key === "esc") {
      event.preventDefault();

      closeEditor();
    }
  }

  function handleDetectedChange() {
    setIndicatorState(ChangeIndicatorState.UNSAVED);

    if (saveTimeoutReference.current) {
      clearTimeout(saveTimeoutReference.current);
    }
    if (props.autoSave && Boolean(props.id)) {
      saveTimeoutReference.current = setTimeout(() => {
        save();
      }, 3000);
    }
  }

  function closeEditor() {
    if (saveTimeoutReference.current) {
      clearTimeout(saveTimeoutReference.current);
    }

    if (typeof props.onClose === "function") {
      props.onClose();
    }
  }

  return (
    <div className="AppEditor">
      <div className="AppEditorWrapper" onKeyDown={handleCanvasKeyDown}>
        <div className="AppEditorCanvas" data-maximized={maximized}>
          <AppEditorHeader
            maximized={maximized}
            ref={nameInputReference}
            onClose={closeEditor}
            onResize={setMaximized}
            defaultValue={props.title}
            indicatorState={indicatorState}
            onChange={handleDetectedChange}
            onSave={save}
          />
          <Editor
            ref={editorReference}
            spellCheck={props.spellCheck}
            onChange={handleDetectedChange}
            rawContentState={props.content}
          />
        </div>
      </div>
    </div>
  );
}
