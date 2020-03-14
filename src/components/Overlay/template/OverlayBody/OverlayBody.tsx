import React from "react";

import "./OverlayBody.css";

import OverlayBodyProps from "./OverlayBodyProps";

export default function OverlayBody(props: OverlayBodyProps) {
  return <div className="OverlayBody">{props.children}</div>;
}
