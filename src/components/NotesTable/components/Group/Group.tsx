import React from "react";
import { useDispatch } from "react-redux";
import { ContextMenuTrigger } from "react-contextmenu";

import { GroupProps } from "./GroupProps";
import {
  openGroup,
  removeGroup,
  ungroupGroup,
  moveToGroup
} from "../../../../redux/notes/actions";
import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";

export default function Group(props: GroupProps) {
  const dispatch = useDispatch();

  function open(event?: React.MouseEvent) {
    dispatch(openGroup(props.id));
  }

  function rename(event?: React.MouseEvent) {
    dispatch(showOverlay(OverlayType.RENAME_GROUP, { id: props.id }));
  }

  function remove(event?: React.MouseEvent) {
    dispatch(removeGroup(props.id));
  }

  function ungroup(event?: React.MouseEvent) {
    dispatch(ungroupGroup(props.id));
  }

  function allowDrop(event: React.DragEvent) {
    event.preventDefault();
  }

  function dragStart(event: React.DragEvent) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({
        index: props.index,
        id: props.id
      })
    );
  }

  function drop(event: React.DragEvent) {
    event.preventDefault();

    const data = JSON.parse(event.dataTransfer.getData("text/plain"));
    const floatingID = data && data.id;

    if (floatingID && floatingID !== props.id) {
      dispatch(moveToGroup(props.id, floatingID));
    }
  }

  function handleClick(event: React.MouseEvent) {
    if (typeof props.onClick === "function") {
      props.onClick(event, props.id);
    }
  }

  function forwardDataToContextMenu() {
    return { id: props.id, index: props.index, open, rename, remove, ungroup };
  }

  // @todo move to utility.
  function timeConverter(UNIX_timestamp: number) {
    const d = new Date(UNIX_timestamp);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(d);
    const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(d);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(d);

    return `${da}/${mo}/${ye}`;
  }

  return (
    <ContextMenuTrigger
      id="group-menu"
      holdToDisplay={-1}
      collect={forwardDataToContextMenu}
      attributes={{
        className: `VTRow ${props.selected ? "selected" : ""} ${
          props.className
        }`,
        style: { ...props.style, width: props.getRowWidth() },
        tabIndex: props.index,
        onDoubleClick: open,
        draggable: true,
        onDragOver: allowDrop,
        onDragStart: dragStart,
        onDrop: drop,
        onClick: handleClick
      }}
    >
      <div className="VTCell" style={{ width: props.getColumnWidth(0) }}>
        <span>{props.title}</span>
      </div>
      <div className="VTCell" style={{ width: props.getColumnWidth(1) }}>
        <span>{props.updatedAt ? timeConverter(props.updatedAt) : "-"}</span>
      </div>
      <div className="VTCell" style={{ width: props.getColumnWidth(2) }}>
        <span>{props.type}</span>
      </div>
    </ContextMenuTrigger>
  );
}
