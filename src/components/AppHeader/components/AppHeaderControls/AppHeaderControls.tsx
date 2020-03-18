import React from "react";

import "./AppHeaderControls.css";

import { AppHeaderControlsProps } from "./AppHeaderControlsProps";
import DefaultControls from "./DefaultControls/DefaultControls";
import { useDispatch } from "react-redux";
import { openEditor } from "../../../../redux/editor/actions";
import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";

export default function AppHeaderControls(props: AppHeaderControlsProps) {
  const dispatch = useDispatch();

  function createNewFolder() {
    dispatch(showOverlay(OverlayType.CREATE_GROUP));
  }

  function createNewFile() {
    dispatch(openEditor());
  }

  return (
    <div className="AppHeaderControls">
      <DefaultControls
        onCreateNewFolder={createNewFolder}
        onCreateNewFile={createNewFile}
      />
    </div>
  );
}
