import React from "react";

import "./AppHeaderControls.css";

import { AppHeaderControlsProps } from "./AppHeaderControlsProps";
import DefaultControls from "./DefaultControls/DefaultControls";

export function AppHeaderControls(props: AppHeaderControlsProps) {
  return (
    <div className="AppHeaderControls">
      <DefaultControls
        onCreateNewFolder={props.onCreateNewFolder}
        onCreateNewFile={props.onCreateNewFile}
      />
    </div>
  );
}
