import React from "react";

import "./OverlayFooter.css";

import OverlayFooterProps from "./OverlayFooterProps";

export default function OverlayFooter(props: OverlayFooterProps) {
  return <footer className="OverlayFooter">{props.children}</footer>;
}
