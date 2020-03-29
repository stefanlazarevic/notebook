import React, { forwardRef } from "react";

import SummaryProps from "./SummaryProps";

const Summary = forwardRef((props: SummaryProps, ref: any) => {
  function keyDown(event: React.KeyboardEvent) {
    if (typeof props.onClick !== "function") {
      return;
    }

    const { key } = event;

    if (key === "Enter" || key === " ") {
      props.onClick(Boolean(props.open));
    }
  }

  function click() {
    if (typeof props.onClick === "function") {
      props.onClick(Boolean(props.open));
    }
  }

  function renderChildren() {
    if (typeof props.children === "function") {
      return props.children(Boolean(props.open));
    }

    return props.children;
  }

  return (
    <div
      ref={ref}
      tabIndex={props.disabled ? -1 : 0}
      className={props.className ? `Summary ${props.className}` : "Summary"}
      onClick={click}
      onKeyDown={keyDown}
    >
      {renderChildren()}
    </div>
  );
});

Summary.displayName = "CollapseSummary";

export default Summary;
