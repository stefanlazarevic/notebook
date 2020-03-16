import React from "react";
import { ContextMenuTrigger } from "react-contextmenu";
import { stateToHTML } from "draft-js-export-html";

import "./Record.css";

import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";
import RecordContextMenu from "./components/RecordContextMenu/RecordContextMenu";
import { convertFromRaw } from "draft-js";
import utils from "../../../../utils";
import { NoteRecordProps } from "./RecordProps";

export default function NoteRecord(props: NoteRecordProps) {
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

    if (
      typeof props.onSwap === "function" &&
      !Number.isNaN(sourceIndex) &&
      sourceIndex !== targetIndex
    ) {
      props.onSwap(sourceIndex, targetIndex);
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

  function ungroup(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    if (typeof props.onUngroup === "function") {
      props.onUngroup(props.id);
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

  function print(event?: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (event) {
      event.stopPropagation();
    }

    if (typeof props.onPrint === "function") {
      props.onPrint(contentState);
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
        onUngroup={props.currentGroupParent && ungroup}
        onRemove={remove}
        onRename={rename}
        onPrint={print}
      />
    </div>
  );
}
