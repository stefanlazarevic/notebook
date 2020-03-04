import React, { useRef } from "react";

import "./SettingsDrawer.css";

import SettingsDrawerHeader from "./components/Header/SettingsDrawerHeader";
import SettingsDrawerFooter from "./components/Footer/SettingsDrawerFooter";
import EditorSettings from "./components/EditorSettings/EditorSettings";
import { EditorSettingsState } from "../../redux/settings/editor/types";
import { ISettingsSection } from "./components/SettingSection/types";

export default function SettingsDrawer(props: any) {
  const editorSettingsRef = useRef<ISettingsSection>();

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
  }

  return (
    <div className="SettingsDrawer">
      <div className="SettingsDrawer__container">
        <SettingsDrawerHeader />
        {/* FormComponent */}
        <div style={{ flex: 1, overflowY: "auto" }}>
          <EditorSettings
            ref={editorSettingsRef}
            autoSave={props.editor.autoSave}
            saveAndClose={props.editor.saveAndClose}
            spellCheck={props.editor.spellCheck}
          />
        </div>
        <SettingsDrawerFooter onApply={apply} onReset={reset} />
      </div>
    </div>
  );
}
