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
  const { editor } = state;
  const { open, id } = editor;

  return {
    open,
    maximized: false,
    id,
    autoSave: true,
    saveAndClose: false,
    spellCheck: true
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onClose: () => dispatch(closeAppEditor()),
    onSave: (record: NoteRecord) => {
      batch(() => {
        dispatch(updateOrInsert(record));
        dispatch(openAppEditor(record.id));
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppEditorContainer);
