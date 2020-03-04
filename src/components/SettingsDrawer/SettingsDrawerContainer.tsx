import React from "react";
import ReactDOM from "react-dom";
import { connect, batch } from "react-redux";
import SettingsDrawer from "./SettingsDrawer";
import { AppState, IDispatch } from "../../redux/types";
import { EditorSettingsState } from "../../redux/settings/editor/types";
import { update as updateEditorSettings } from "../../redux/settings/editor/actions";

function SettingsDrawerContainer(props: any) {
  return (
    <>
      {props.open &&
        ReactDOM.createPortal(
          <SettingsDrawer {...props} />,
          document.getElementById("settings-drawer-root") as HTMLDivElement
        )}
    </>
  );
}

function mapStateToProps(state: AppState) {
  const { settings } = state;
  const { editor } = settings;

  return {
    open: true,
    editor
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    apply: (editorSettings: Partial<EditorSettingsState>) =>
      batch(() => {
        dispatch(updateEditorSettings(editorSettings));
      })
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsDrawerContainer);
