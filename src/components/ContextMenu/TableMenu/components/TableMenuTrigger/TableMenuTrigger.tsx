import React from "react";
import { contextMenu } from "react-contexify";

import "./TableMenuTrigger.css";

export default function TableMenuProvider(props: any) {
  function triggerContextMenu(event: React.MouseEvent) {
    event.preventDefault();

    contextMenu.show({
      id: "table-menu",
      event
    });
  }

  return (
    <div
      onDragOver={props.onDragOver}
      onDrop={props.onDrop}
      className={props.className ? ` ${props.className}` : "TableMenuTrigger"}
      onContextMenu={triggerContextMenu}
    >
      {props.children}
    </div>
  );
}
