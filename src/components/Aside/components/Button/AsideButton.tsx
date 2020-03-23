import React from "react";

import "./AsideButton.css";

export default function AsideButton(props: any) {
  function click(event: React.MouseEvent) {
    if (typeof props.onClick === "function") {
      props.onClick(event);
    }
  }

  return (
    <button
      className="AsideButton"
      disabled={props.disabled}
      onClick={click}
      data-active={props.active}
    >
      {props.children || props.text}
    </button>
  );
}
