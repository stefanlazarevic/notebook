import React from "react";

import "./OverlayFooter.css";

export default function OverlayFooter(props: any) {
  return <footer className="OverlayFooter">{props.children}</footer>;
}
