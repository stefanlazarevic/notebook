import React from "react";
import { ContextMenu, MenuItem } from "react-contextmenu";

export default function RecordContextMenu(props: any) {
  return (
    <ContextMenu id={props.id}>
      <MenuItem disabled={!Boolean(props.onOpen)} onClick={props.onOpen}>
        Open
      </MenuItem>
      <MenuItem disabled={!Boolean(props.onPrint)} onClick={props.onPrint}>
        Print
      </MenuItem>
      <MenuItem divider />
      <MenuItem disabled={!Boolean(props.onCopy)} onClick={props.onCopy}>
        Copy
      </MenuItem>
      <MenuItem disabled={!Boolean(props.onCut)} onClick={props.onCut}>
        Cut
      </MenuItem>
      <MenuItem disabled={!Boolean(props.onRename)} onClick={props.onRename}>
        Rename
      </MenuItem>
      <MenuItem divider />
      <MenuItem disabled={!Boolean(props.onUngroup)} onClick={props.onUngroup}>
        Ungroup
      </MenuItem>
      <MenuItem divider />
      <MenuItem disabled={!Boolean(props.onRemove)} onClick={props.onRemove}>
        Remove
      </MenuItem>
    </ContextMenu>
  );
}
