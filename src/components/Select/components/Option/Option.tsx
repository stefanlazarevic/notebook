import React from "react";

import "./Option.css";

import OptionProps from "./OptionProps";

export default function Option(props: OptionProps) {
  function onKeyDown(event: React.KeyboardEvent) {
    const { keyCode } = event;

    if (keyCode === 32 || keyCode === 13) {
      event.stopPropagation();
      select(event);
    }
  }

  function onClick(event: React.MouseEvent) {
    event.stopPropagation();
    select(event);
  }

  function select(event: React.SyntheticEvent) {
    if (typeof props.onSelected === "function") {
      props.onSelected(event, props.index, props.value);
    }
  }

  return (
    <div
      className="Option"
      role="option"
      tabIndex={props.expanded ? 0 : -1}
      aria-selected={props.index === props.selectedIndex}
      onKeyDown={onKeyDown}
      onClick={onClick}
    >
      <span>{props.label}</span>
    </div>
  );
}
