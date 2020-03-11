import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

export default function RecordContextMenu(props: any) {
  function open() {
    if (typeof props.onOpen === "function") {
      props.onOpen();
    }
  }

  return (
    <ContextMenu id={props.id}>
      <MenuItem disabled={false} onClick={open}>
        Open
      </MenuItem>
    </ContextMenu>
  );
}
