import React, { useRef, useEffect } from "react";
import utils from "../../utils";
import { KeycodeMap } from "../AppEditor/layout/Editor/Shortcuts";

export default function Overlay(props: any) {
  let overlayTabElements = useRef<any>([]);

  useEffect(() => {
    if (overlayTabElements.current) {
      overlayTabElements.current = utils.dom.getTabbableElements(props.id);
    }

    return () => {
      if (overlayTabElements.current) {
        overlayTabElements.current = [];
      }
    };
  }, [props.id]);

  function close() {
    if (typeof props.onClose === "function") {
      props.onClose(props.id);
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
    <div id={props.id} className="Overlay" onKeyDown={handleKeyDown}>
      {React.Children.map(props.children, (child: any) => {
        return React.cloneElement(child, { ...child.props, onClose: close });
      })}
    </div>
  );
}
