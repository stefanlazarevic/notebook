import React, { useState, useEffect, useRef, cloneElement } from "react";

export { default as Summary } from "./components/Summary/Summary";
export { default as Details } from "./components/Details/Details";

export default function Collapse(props: any) {
  const [open, setOpen] = useState(false);

  const details = useRef<any>(null);
  const summary = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(props.open);
  }, [props.open]);

  useEffect(() => {
    if (typeof props.open === "boolean") {
      setOpen(props.open);
    }
  }, [props.open]);

  function collapse() {
    if (details.current) {
      details.current.collapse();
    }
  }

  function expand() {
    if (details.current) {
      details.current.expand();
    }

    setOpen(true);
  }

  function toggleOpenState() {
    if (open) {
      collapse();
    } else {
      expand();
    }
  }

  function close() {
    setOpen(false);
  }

  return (
    <div className="Collapse">
      {React.Children.map(props.children, (child: any) => {
        if (child.type && child.type.displayName === "CollapseSummary") {
          return cloneElement(child, {
            ...child.props,
            open,
            onClick: toggleOpenState,
            ref: summary
          });
        }

        if (child.type && child.type.displayName === "CollapseDetails") {
          return cloneElement(child, {
            ...child.props,
            open,
            ref: details,
            onCollapse: close
          });
        }

        return child;
      })}
    </div>
  );
}
