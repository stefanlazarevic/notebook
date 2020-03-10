import React from "react";
import { createPortal } from "react-dom";
import { connect, batch } from "react-redux";

import { AppEditorContainerProps } from "./AppEditorProps";
import AppEditor from "./AppEditor";
import { AppState, IDispatch } from "../../redux/types";
import {
  close as closeAppEditor,
  open as openAppEditor
} from "../../redux/editor/actions";
import { NoteRecord } from "../../redux/notes/records/types";
import { updateOrInsert } from "../../redux/notes/records/actions";
import { NoteGroupID } from "../../redux/notes/groups/types";
import { insert } from "../../redux/notes/groups/actions";

function AppEditorContainer(props: AppEditorContainerProps) {
  return (
    <>
      {props.open &&
        createPortal(
          <AppEditor {...props} />,
          document.getElementById("app-editor-root") as HTMLDivElement
        )}
    </>
  );
}

function mapStateToProps(state: AppState) {
  const { editor, settings, notes } = state;
  const { open, id } = editor;
  const { editor: editorSettings } = settings;
  const { group } = notes;

  return {
    open,
    maximized: false,
    id,
    autoSave: Boolean(editorSettings.autoSave),
    saveAndClose: Boolean(editorSettings.saveAndClose),
    spellCheck: Boolean(editorSettings.spellCheck),
    group
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onClose: () => dispatch(closeAppEditor()),
    onSave: (group: NoteGroupID, record: NoteRecord) => {
      batch(() => {
        dispatch(updateOrInsert(record));
        dispatch(openAppEditor(record.id));
        dispatch(insert(group, record.id));
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppEditorContainer);
