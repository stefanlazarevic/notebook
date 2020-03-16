import React from "react";
import { ContextMenuTrigger } from "react-contextmenu";
import { stateToHTML } from "draft-js-export-html";

import "./Record.css";

import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";
import RecordContextMenu from "./components/RecordContextMenu/RecordContextMenu";
import { convertFromRaw } from "draft-js";
import utils from "../../../../utils";

export default function NoteRecord(props: any) {
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

  function handleDrop(event: any) {
    event.preventDefault();

    const data = JSON.parse(event.dataTransfer.getData("text/plain"));

    const sourceIndex = parseInt(data && data.index);
    const targetIndex = props.index;

    if (
      typeof props.onDrop === "function" &&
      !Number.isNaN(sourceIndex) &&
      sourceIndex !== targetIndex
    ) {
      props.onDrop(sourceIndex, targetIndex);
    }
  }

  function handleClick() {
    if (typeof props.onClick === "function") {
      props.onClick(props.id);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<any>) {
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "enter" && typeof props.onClick === "function") {
      event.preventDefault();

      props.onClick(props.id);
    }
  }

  return (
    <div
      className="NoteRecord"
      draggable="true"
      onDragOver={allowDrop}
      onDragStart={dragStart}
      onDrop={handleDrop}
      onClick={handleClick}
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
        parent={props.parent}
        groupParent={props.groupParent}
        onOpen={handleClick}
        onUngroup={props.ungroup}
        onRemove={props.removeRecord}
        onRename={props.renameRecord}
      />
    </div>
  );
}
