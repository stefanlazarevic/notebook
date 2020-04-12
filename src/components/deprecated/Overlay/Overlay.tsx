import React, { useRef, useEffect } from "react";
import utils from "../../utils";
import { KeycodeMap } from "../AppEditor/layout/Editor/Shortcuts";

import "./Overlay.css";

export default function Overlay(props: any) {
  let overlayTabElements = useRef<any>([]);

  useEffect(() => {
    if (overlayTabElements.current) {
      overlayTabElements.current = utils.dom.getTabbableElements(
        props.overlayID
      );
    }

    return () => {
      if (overlayTabElements.current) {
        overlayTabElements.current = [];
      }
    };
  }, [props.overlayID]);

  function close() {
    if (typeof props.onClose === "function") {
      props.onClose(props.overlayID);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<any>) {
    const { keyCode, target } = event;
    const isShiftKey = event.shiftKey;
    const key = KeycodeMap[keyCode];

    if (key === "esc") {
      close();
      return;
    }

    if (key === "tab" && isShiftKey) {
      if (
        overlayTabElements &&
        target === utils.array.first(overlayTabElements.current)
      ) {
        event.preventDefault();

        utils.array.last(overlayTabElements.current).focus();
      }

      return;
    }

    if (key === "tab") {
      if (
        overlayTabElements &&
        target === utils.array.last(overlayTabElements.current)
      ) {
        event.preventDefault();

        utils.array.first(overlayTabElements.current).focus();
      }
    }
  }

  return (
    <div id={props.overlayID} className="Overlay" onKeyDown={handleKeyDown}>
      {React.Children.map(props.children, (child: any) => {
        return React.cloneElement(child, { ...child.props, onClose: close });
      })}
    </div>
  );
}
