import React from "react";
import ReactDOM from "react-dom";
import { connect, batch } from "react-redux";

import NoteEditor from "./NoteEditor";
import { AppState, IDispatch } from "../../redux/types";
import { NoteRecord } from "../../redux/notes/records/types";
import { updateOrInsert } from "../../redux/notes/records/actions";
import { close, open } from "../../redux/editor/actions";

function NoteEditorContainer(props: any) {
  return (
    <>
      {props.open &&
        ReactDOM.createPortal(
          <NoteEditor {...props} />,
          document.getElementById("note-editor-root") as HTMLElement
        )}
    </>
  );
}

function mapStateToProps(state: AppState) {
  const { editor, settings } = state;
  const { editor: editorSettings } = settings;
  const { spellCheck, autoSave, saveAndClose } = editorSettings;

  return {
    open: editor.open,
    id: editor.id,
    spellCheck,
    autoSave,
    saveAndClose
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    updateOrInsert: (record: NoteRecord) =>
      batch(() => {
        dispatch(updateOrInsert(record));
        dispatch(open(record.id));
      }),
    close: () => dispatch(close())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditorContainer);
