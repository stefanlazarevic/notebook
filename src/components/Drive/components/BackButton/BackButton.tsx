import React from "react";
import SVG from "react-inlinesvg";

import "./BackButton.css";

export default function BackButton(props: any) {
  return (
    <button className="BackButton">
      <SVG src="/icons/back.svg" />
    </button>
  );
}
