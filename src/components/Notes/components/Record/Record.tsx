import React from "react";
import { ContextMenuTrigger } from "react-contextmenu";
import { stateToHTML } from "draft-js-export-html";

import "./Record.css";

import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";
import RecordContextMenu from "./components/RecordContextMenu/RecordContextMenu";
import { convertFromRaw } from "draft-js";
import utils from "../../../../utils";
import { useDispatch, useSelector } from "react-redux";
import {
  swapCurrentGroupChildren,
  ungroupRecord
} from "../../../../redux/notes/actions";
import { openEditor } from "../../../../redux/editor/actions";
import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";
import { queuePrintRecords } from "../../../../redux/print/actions";
import { AppState } from "../../../../redux/types";

export default function NoteRecord(props: any) {
  const dispatch = useDispatch();

  const currentGroupParentID = useSelector(
    (state: AppState) => state.notes.groups[state.notes.currentGroupID].parent
  );

  const contentState = convertFromRaw(props.content);

  function allowDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function dragStart(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ index: props.index, id: props.id })
    );
  }

  function drop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();

    const data = JSON.parse(event.dataTransfer.getData("text/plain"));

    const sourceIndex = parseInt(data && data.index);
    const targetIndex = props.index;

    if (!Number.isNaN(sourceIndex) && sourceIndex !== targetIndex) {
      dispatch(swapCurrentGroupChildren(sourceIndex, targetIndex));
    }
  }

  function open(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(openEditor(props.id));
  }

  function ungroup(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(ungroupRecord(props.id));
  }

  function remove(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(showOverlay(OverlayType.DELETE_RECORD, { id: props.id }));
  }

  function rename(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(showOverlay(OverlayType.RENAME_RECORD, { id: props.id }));
  }

  function print(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    dispatch(queuePrintRecords([props.id]));
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
      className="NoteRecord"
      draggable="true"
      onDragOver={allowDrop}
      onDragStart={dragStart}
      onDrop={drop}
      onClick={open}
      tabIndex={props.tabIndex}
      onKeyDown={handleKeyDown}
    >
      <ContextMenuTrigger id={props.id} holdToDisplay={-1}>
        <div className="NoteRecordCard">
          <h4 className="NoteRecordTitle">{props.title}</h4>
          <div className="NoteRecordContent">
            <p
              dangerouslySetInnerHTML={{
                __html: stateToHTML(utils.editor.truncate(contentState, 150))
              }}
            ></p>
          </div>
        </div>
      </ContextMenuTrigger>
      <RecordContextMenu
        id={props.id}
        onOpen={open}
        onUngroup={Boolean(currentGroupParentID) && ungroup}
        onRemove={remove}
        onRename={rename}
        onPrint={print}
      />
    </div>
  );
}
