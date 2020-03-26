import React from "react";

export default function BreadcrumbElement(props: any) {
  return (
    <div
      id={props.id}
      className="BreadcrumbElement"
      onDrop={props.onDrop}
      tabIndex={props.index}
      onClick={props.onClick}
      onDoubleClick={props.onDoubleClick}
    >
      {props.children}
    </div>
  );
}
