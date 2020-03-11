import React from "react";

import "./Record.css";

export default function NoteRecord(props: any) {
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

  return (
    <div
      className="NoteRecord"
      draggable="true"
      onDragOver={allowDrop}
      onDragStart={dragStart}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <div className="NoteRecordCard">
        <h4 className="NoteRecordTitle">{props.title}</h4>
      </div>
    </div>
  );
}
