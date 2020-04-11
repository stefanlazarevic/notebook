import React from "react";

import "./ZoomStatus.css";

import IZoomStatusProps from "./ZoomStatusProps";

export default function ZoomStatus(props: IZoomStatusProps) {
  return (
    <div className="ZoomStatus">
      <span>{props.zoom}%</span>
    </div>
  );
}
