import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";
import { useDispatch } from "react-redux";

import { showOverlay } from "../../../redux/overlays/actions";
import { OverlayType } from "../../../redux/overlays/types";
import { openEditor } from "../../../redux/editor/actions";

export default function TableMenu(props: any) {
  const dispatch = useDispatch();

  function createGroup(event: React.MouseEvent) {
    event.preventDefault();

    dispatch(showOverlay(OverlayType.CREATE_GROUP));
  }

  function createRecord(event: React.MouseEvent) {
    event.preventDefault();

    dispatch(openEditor());
  }

  return (
    <ContextMenu id="table-menu">
      <MenuItem onClick={createGroup}>Create Folder</MenuItem>
      <MenuItem onClick={createRecord}>Create Note</MenuItem>
    </ContextMenu>
  );
}
