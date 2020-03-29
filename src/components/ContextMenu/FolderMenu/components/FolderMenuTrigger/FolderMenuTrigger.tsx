import React from "react";
import { contextMenu } from "react-contexify";

export default function FolderMenuProvider(props: any) {
  function triggerContextMenu(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    contextMenu.show({
      id: `ContextMenu-${props.id}`,
      event,
      props: props.forwardDataToContextMenu()
    });
  }

  return (
    <div
      tabIndex={props.tabIndex}
      style={props.style}
      className={
        props.className
          ? `FolderMenuTrigger ${props.className}`
          : "FolderMenuTrigger"
      }
      onContextMenu={triggerContextMenu}
      onDoubleClick={props.onDoubleClick}
      onClick={props.onClick}
      draggable={props.draggable}
      onDragOver={props.onDragOver}
      onDragStart={props.onDragStart}
      onDrop={props.drop}
      onKeyDown={props.onKeyDown}
    >
      {props.children}
    </div>
  );
}
