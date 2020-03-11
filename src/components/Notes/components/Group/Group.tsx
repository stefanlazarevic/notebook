import React from "react";

import "./Group.css";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";
import { NoteGroupProps } from "./GroupProps";
import { ContextMenuTrigger } from "react-contextmenu";
import GroupContextMenu from "./components/GroupContextMenu/GroupContextMenu";

export default function NoteGroup(props: NoteGroupProps) {
  function allowDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function dragStart(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ index: props.index, id: props.id })
    );
  }

  function handleDrop(event: any) {
    event.preventDefault();

    const data = JSON.parse(event.dataTransfer.getData("text/plain"));
    const sourceId = data && data.id;
    const targetId = props.id;

    if (
      typeof props.onDrop === "function" &&
      sourceId &&
      sourceId !== targetId
    ) {
      props.onDrop(targetId, [sourceId]);
    }
  }

  function handleDoubleClick(event: React.MouseEvent) {
    if (typeof props.onDoubleClick === "function") {
      props.onDoubleClick(props.id);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<any>) {
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "enter" && typeof props.onDoubleClick === "function") {
      event.preventDefault();

      props.onDoubleClick(props.id);
    }
  }

  return (
    <div
      className="NoteGroup"
      draggable="true"
      onDragOver={allowDrop}
      onDragStart={dragStart}
      onDrop={handleDrop}
      onDoubleClick={handleDoubleClick}
      tabIndex={props.tabIndex}
      onKeyDown={handleKeyDown}
    >
      <ContextMenuTrigger id={props.id} holdToDisplay={-1}>
        <div className="NoteGroupBack"></div>
        <div className="NoteGroupFront">
          <h5 className="NoteGroupTitle">
            <span>{props.title}</span>
          </h5>
        </div>
      </ContextMenuTrigger>
      <GroupContextMenu id={props.id} onOpen={handleDoubleClick} />
    </div>
  );
}
