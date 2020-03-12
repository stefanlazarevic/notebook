import React from "react";
import CloseButton from "../../../AppEditor/components/CloseButton/CloseButton";

import "./OverlayHeader.css";

export default function OverlayHeader(props: any) {
  return (
    <header className="OverlayHeader">
      <span className="OverlayHeaderTitle">{props.title}</span>
      <CloseButton />
    </header>
  );
}
