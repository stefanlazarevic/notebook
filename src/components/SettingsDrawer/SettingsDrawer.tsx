import React, { useRef } from "react";

import "./SettingsDrawer.css";

import SettingsDrawerHeader from "./components/Header/SettingsDrawerHeader";
import SettingsDrawerFooter from "./components/Footer/SettingsDrawerFooter";
import EditorSettings from "./components/EditorSettings/EditorSettings";
import { EditorSettingsState } from "../../redux/settings/editor/types";
import { ISettingsSection } from "./components/SettingSection/types";
import NotesSettings from "./components/NotesSettings/NotesSettings";

export default function SettingsDrawer(props: any) {
  const editorSettingsRef = useRef<ISettingsSection>();
  const notesSettingsRef = useRef<ISettingsSection>();

  function apply() {
    let editorSettingsState: EditorSettingsState = {};

    if (editorSettingsRef.current) {
      editorSettingsState = editorSettingsRef.current.getState() as EditorSettingsState;
    }

    props.apply(editorSettingsState);
  }

  function reset() {
    if (editorSettingsRef.current) {
      editorSettingsRef.current.reset();
    }

    if (notesSettingsRef.current) {
      notesSettingsRef.current.reset();
    }
  }

  return (
    <div className="SettingsDrawer">
      <div className="SettingsDrawer__container">
        <SettingsDrawerHeader />
        {/* FormComponent */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <EditorSettings ref={editorSettingsRef} {...props.editor} />
          <NotesSettings ref={notesSettingsRef} {...props.notes} />
        </div>
        <SettingsDrawerFooter onApply={apply} onReset={reset} />
      </div>
    </div>
  );
}
