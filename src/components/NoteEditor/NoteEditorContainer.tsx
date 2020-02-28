import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import NoteEditor from "./NoteEditor";
import { AppState, IDispatch } from "../../redux/types";

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
  return {
    open: true
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteEditorContainer);
