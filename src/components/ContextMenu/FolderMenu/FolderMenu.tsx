import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";
import { useSelector } from "react-redux";
import { AppState } from "../../../redux/types";
import utils from "../../../utils";

export default function FolderMenu(props: any) {
  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const parentGroupID = useSelector((state: AppState) =>
    utils.array.last(state.notes.groups[currentGroupId].path)
  );

  function open(event: React.MouseEvent, data: any) {
    event.preventDefault();

    if (typeof data.open === "function") {
      data.open();
    }
  }

  function rename(event: React.MouseEvent, data: any) {
    event.preventDefault();

    if (typeof data.rename === "function") {
      data.rename();
    }
  }

  function ungroup(event: React.MouseEvent, data: any) {
    event.preventDefault();

    if (typeof data.ungroup === "function") {
      data.ungroup();
    }
  }

  function remove(event: React.MouseEvent, data: any) {
    event.preventDefault();

    if (typeof data.remove === "function") {
      data.remove();
    }
  }

  return (
    <ContextMenu id="group-menu">
      <MenuItem onClick={open}>Open</MenuItem>
      <MenuItem divider />
      <MenuItem disabled={true}>Copy</MenuItem>
      <MenuItem disabled={true}>Cut</MenuItem>
      <MenuItem onClick={rename}>Rename</MenuItem>
      <MenuItem divider />
      <MenuItem disabled={!Boolean(parentGroupID)} onClick={ungroup}>
        Ungroup
      </MenuItem>
      <MenuItem divider />
      <MenuItem onClick={remove}>Remove</MenuItem>
    </ContextMenu>
  );
}
