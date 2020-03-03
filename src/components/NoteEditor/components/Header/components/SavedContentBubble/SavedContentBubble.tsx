import React from "react";

import "./SavedContentBubble.css";

export default function SavedContentBubble(props: any) {
  function getTitle(): string {
    if (props.saved) {
      return "All changes has been saved.";
    }

    return "Some changes are not saved.";
  }

  return (
    <div className="SavedContentBubble" title={getTitle()}>
      <span className={props.saved ? "saved" : ""} />
    </div>
  );
}
