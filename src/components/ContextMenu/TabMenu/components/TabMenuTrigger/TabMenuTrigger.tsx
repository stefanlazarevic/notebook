import React from "react";
import { contextMenu } from "react-contexify";

export default function TabMenuTrigger(props: any) {
  function triggerContextMenu(event: React.MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    contextMenu.show({
      id: `TabContextMenu-${props.id}-${props.index}`,
      event,
      props: props.forwardDataToContextMenu()
    });
  }

  return (
    <button
      className={props.className ? ` ${props.className}` : "TableMenuTrigger"}
      onContextMenu={triggerContextMenu}
      onClick={props.onClick}
      title={props.title}
      aria-label={props.title}
      onDragOver={props.onDragOver}
    >
      {props.children}
    </button>
  );
}
