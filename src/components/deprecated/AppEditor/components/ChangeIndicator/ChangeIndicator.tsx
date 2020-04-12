import React from "react";

import "./ChangeIndicator.css";
import { ChangeIndicatorProps } from "./ChangeIndicatorProps";

export default function ChangeIndicator(props: ChangeIndicatorProps) {
  return (
    <div className="ChangeIndicator">
      <span className="ChangeIndicatorDot" data-state={props.state} />
    </div>
  );
}
