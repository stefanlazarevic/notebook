import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

export default function RecordContextMenu(props: any) {
  function open(event: React.MouseEvent<any>) {
    event.stopPropagation();

    if (typeof props.onOpen === "function") {
      props.onOpen();
    }
  }

  function ungroup(event: React.MouseEvent<any>) {
    event.stopPropagation();

    if (typeof props.onUngroup === "function") {
      props.onUngroup(props.id);
    }
  }

  function remove(event: React.MouseEvent<any>) {
    event.stopPropagation();

    if (typeof props.onRemove === "function") {
      props.onRemove(props.id);
    }
  }

  function rename(event: React.MouseEvent<any>) {
    event.stopPropagation();

    if (typeof props.onRename === "function") {
      props.onRename(props.id);
    }
  }

  return (
    <ContextMenu id={props.id}>
      <MenuItem disabled={false} onClick={open}>
        Open
      </MenuItem>
      <MenuItem disabled={false} onClick={rename}>
        Rename
      </MenuItem>
      <MenuItem disabled={!Boolean(props.groupParent)} onClick={ungroup}>
        Ungroup
      </MenuItem>
      <MenuItem disabled={false} onClick={remove}>
        Delete
      </MenuItem>
    </ContextMenu>
  );
}
