import React from "react";
import { useDispatch } from "react-redux";
import { ContextMenuTrigger } from "react-contextmenu";
import { FaFolder } from "react-icons/fa";

import { GroupProps } from "./GroupProps";
import {
  openGroup,
  removeGroup,
  ungroupGroup,
  moveToGroup
} from "../../../../redux/notes/actions";
import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";

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

  function handleKeyDown(event: React.KeyboardEvent) {
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "enter") {
      dispatch(openGroup(props.id));
    }

    if (key === "f2") {
      dispatch(showOverlay(OverlayType.RENAME_GROUP, { id: props.id }));
    }

    if (key === "delete") {
      dispatch(removeGroup(props.id));
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
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    let HH = hours % 12;
    HH = HH ? HH : 12; // the hour '0' should be '12'
    let MM = minutes < 10 ? "0" + minutes : minutes;

    const strTime = HH + ":" + MM + " " + ampm;

    return `${da}/${mo}/${ye} ${strTime}`;
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
        onClick: handleClick,
        onKeyDown: handleKeyDown
      }}
    >
      <div className="VTCell" style={{ width: props.getColumnWidth(0) }}>
        <div className="VTCellContent">
          <FaFolder className="VTCellIcon" />
          <span>{props.title}</span>
        </div>
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
