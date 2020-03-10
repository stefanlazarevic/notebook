import React from "react";

import "./Note.css";

export default function Note(props: any) {
  function allowDrop(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function dragStart(event: React.DragEvent<HTMLDivElement>) {
    event.dataTransfer.setData("text/plain", props.id);
  }

  function handleDrop(event: any) {
    event.preventDefault();

    const sourceId = event.dataTransfer.getData("text/plain");
    const targetId = props.id;

    if (typeof props.onReorder === "function") {
      props.onReorder(sourceId, targetId);
    }
  }

  return (
    <div
      className="Note"
      draggable="true"
      onDragOver={allowDrop}
      onDragStart={dragStart}
      onDrop={handleDrop}
    >
      <div className="NoteCard">
        <h4 className="NoteCardTitle">{props.title}</h4>
      </div>
    </div>
  );
}
