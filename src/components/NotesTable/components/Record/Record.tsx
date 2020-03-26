import React from "react";
import { ContextMenuTrigger } from "react-contextmenu";
import { useDispatch } from "react-redux";
import { openEditor } from "../../../../redux/editor/actions";
import { queuePrintRecords } from "../../../../redux/print/actions";
import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";
import { ungroupRecord } from "../../../../redux/notes/actions";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";

export default function Record(props: any) {
  const dispatch = useDispatch();

  function open() {
    dispatch(openEditor(props.id));
  }

  function print() {
    dispatch(queuePrintRecords([props.id]));
  }

  function ungroup(event?: React.MouseEvent) {
    dispatch(ungroupRecord(props.id));
  }

  function rename() {
    dispatch(showOverlay(OverlayType.RENAME_RECORD, { id: props.id }));
  }

  function remove() {
    dispatch(showOverlay(OverlayType.DELETE_RECORD, { id: props.id }));
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

  function handleClick(event: React.MouseEvent) {
    if (typeof props.onClick === "function") {
      props.onClick(event, props.id);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    event.preventDefault();
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "delete") {
      remove();
    }

    if (key === "f2") {
      rename();
    }
  }

  function forwardDataToContextMenu() {
    return {
      id: props.id,
      index: props.index,
      open,
      print,
      ungroup,
      rename,
      remove
    };
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
      id="record-menu"
      holdToDisplay={-1}
      collect={forwardDataToContextMenu}
      attributes={{
        className: `VTRow ${props.className}`,
        style: { ...props.style, width: props.getRowWidth() },
        tabIndex: props.index,
        onDoubleClick: open,
        draggable: true,
        onDragStart: dragStart,
        onClick: handleClick,
        onKeyDown: handleKeyDown
      }}
    >
      <div
        className="VTCell"
        style={{
          width: props.getColumnWidth(0)
        }}
      >
        <span>{props.title}</span>
      </div>
      <div
        className="VTCell"
        style={{
          width: props.getColumnWidth(1)
        }}
      >
        <span>{props.updatedAt ? timeConverter(props.updatedAt) : "-"}</span>
      </div>
      <div
        className="VTCell"
        style={{
          width: props.getColumnWidth(2)
        }}
      >
        <span>{props.type}</span>
      </div>
    </ContextMenuTrigger>
  );
}
