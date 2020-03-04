import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import SettingsDrawer from "./SettingsDrawer";

function SettingsDrawerContainer(props: any) {
  return (
    <>
      {ReactDOM.createPortal(
        <SettingsDrawer {...props} />,
        document.getElementById("settings-drawer-root") as HTMLDivElement
      )}
    </>
  );
}

export default connect(null, null)(SettingsDrawerContainer);
