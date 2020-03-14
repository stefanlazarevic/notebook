import React from "react";
import { MdClose } from "react-icons/md";

import "./OverlayHeader.css";

import { OverlayHeaderProps } from "./OverlayHeaderProps";

export default function OverlayHeader(props: OverlayHeaderProps) {
  function close() {
    if (typeof props.onClose === "function") {
      props.onClose(props.id);
    }
  }

  return (
    <header className="OverlayHeader">
      <span className="OverlayHeaderTitle">{props.title}</span>
      <button className="OverlayHeaderButton" onClick={close}>
        <MdClose />
      </button>
    </header>
  );
}
