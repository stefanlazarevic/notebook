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
      JSON.stringify({
        index: props.index,
        id: props.id
      })
    );
  }

  function drop(event: any) {
    event.preventDefault();

    const data = JSON.parse(event.dataTransfer.getData("text/plain"));
    const sourceId = data && data.id;
    const targetId = props.id;

    if (
      typeof props.onMoveIn === "function" &&
      sourceId &&
      sourceId !== targetId
    ) {
      props.onMoveIn(targetId, sourceId);
    }
  }

  function open(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    if (typeof props.onOpen === "function") {
      props.onOpen(props.id);
    }
  }

  function remove(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    if (typeof props.onRemove === "function") {
      props.onRemove(props.id);
    }
  }

  function rename(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    if (typeof props.onRename === "function") {
      props.onRename(props.id);
    }
  }

  function ungroup(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    if (typeof props.onUngroup === "function") {
      props.onUngroup(props.id);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<any>) {
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "enter") {
      event.preventDefault();

      open();
    }
  }

  return (
    <div
      className="NoteGroup"
      draggable="true"
      onDragOver={allowDrop}
      onDragStart={dragStart}
      onDrop={drop}
      onDoubleClick={open}
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
      <GroupContextMenu
        id={props.id}
        onOpen={open}
        onUngroup={props.currentGroupParent && ungroup}
        onRemove={!props.hasChildren && remove}
        onRename={rename}
      />
    </div>
  );
}
