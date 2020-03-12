import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

export default function GroupContextMenu(props: any) {
  function open(event: React.MouseEvent<any>) {
    event.stopPropagation();

    if (typeof props.onOpen === "function") {
      props.onOpen();
    }
  }

  function ungroup(event: React.MouseEvent<any>) {
    event.stopPropagation();

    if (typeof props.onUngroup === "function") {
      props.onUngroup(props.groupParent, [props.id]);
    }
  }

  return (
    <ContextMenu id={props.id}>
      <MenuItem disabled={false} onClick={open}>
        Open
      </MenuItem>
      <MenuItem disabled={!Boolean(props.groupParent)} onClick={ungroup}>
        Ungroup
      </MenuItem>
    </ContextMenu>
  );
}
