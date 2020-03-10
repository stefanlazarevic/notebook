import React from "react";

import "./Group.css";

export default function NoteGroup(props: any) {
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

    if (typeof props.onDrop === "function" && sourceId) {
      props.onDrop(targetId, [sourceId]);
    }
  }

  function handleDoubleClick(event: React.MouseEvent) {
    if (typeof props.onDoubleClick === "function") {
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
    >
      <div className="NoteGroupBack"></div>
      <div className="NoteGroupFront"></div>
    </div>
  );
}
