import React from "react";
import { createPortal } from "react-dom";
import { connect, batch } from "react-redux";

import { AppEditorContainerProps } from "./AppEditorProps";
import AppEditor from "./AppEditor";
import { AppState, IDispatch } from "../../redux/types";
import { closeEditor, openEditor } from "../../redux/editor/actions";
import { NoteRecord } from "../../redux/notes/records/types";
import { updateOrInsert } from "../../redux/notes/records/actions";
import { NoteGroupID } from "../../redux/notes/groups/types";
import { moveToGroup } from "../../redux/notes/groups/actions";

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
  const { group, records } = notes;

  let record;

  if (id) {
    record = records[id];
  }

  return {
    open,
    maximized: false,
    autoSave: Boolean(editorSettings.autoSave),
    saveAndClose: Boolean(editorSettings.saveAndClose),
    spellCheck: Boolean(editorSettings.spellCheck),
    groupID: group,
    ...record
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onClose: () => dispatch(closeEditor()),
    onSave: (groupID: NoteGroupID, record: NoteRecord) => {
      batch(() => {
        dispatch(updateOrInsert(record));
        dispatch(openEditor(record.id));
        dispatch(moveToGroup(groupID, [record.id]));
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppEditorContainer);
