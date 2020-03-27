import React from "react";

import "./TableFooter.css";

export default function TableFooter(props: any) {
  return (
    <div className="TableFooter">
      <span>{props.items}</span>
      &nbsp;
      <span>Items</span>
    </div>
  );
}
