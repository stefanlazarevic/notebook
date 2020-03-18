import React from "react";

import "./Group.css";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";
import { ContextMenuTrigger } from "react-contextmenu";
import GroupContextMenu from "./components/GroupContextMenu/GroupContextMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  openGroup,
  removeGroup,
  ungroupGroup,
  moveToGroup
} from "../../../../redux/notes/actions";
import { OverlayType } from "../../../../redux/overlays/types";
import { showOverlay } from "../../../../redux/overlays/actions";
import { AppState } from "../../../../redux/types";

export default function NoteGroup(props: any) {
  const dispatch = useDispatch();

  const currentGroupParentID = useSelector(
    (state: AppState) => state.notes.groups[state.notes.currentGroupID].parent
  );

  const isEmpty = useSelector(
    (state: AppState) => state.notes.groups[props.id].children.length === 0
  );

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

    if (sourceId && sourceId !== props.id) {
      dispatch(moveToGroup(props.id, sourceId));
    }
  }

  function open(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(openGroup(props.id));
  }

  function remove(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(removeGroup(props.id));
  }

  function rename(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(showOverlay(OverlayType.RENAME_GROUP, { id: props.id }));
  }

  function ungroup(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(ungroupGroup(props.id));
  }

  function handleKeyDown(event: React.KeyboardEvent<any>) {
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "enter" || key === "space") {
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
        onUngroup={Boolean(currentGroupParentID) && ungroup}
        onRemove={isEmpty && remove}
        onRename={rename}
      />
    </div>
  );
}
