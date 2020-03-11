import React from "react";

import "./Note.css";

export default function Note(props: any) {
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

    if (typeof props.onDrop === "function" && !Number.isNaN(sourceIndex)) {
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
      className="Note"
      draggable="true"
      onDragOver={allowDrop}
      onDragStart={dragStart}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <div className="NoteCard">
        <h4 className="NoteCardTitle">{props.title}</h4>
      </div>
    </div>
  );
}
