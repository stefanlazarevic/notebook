import React, { forwardRef, useRef, useImperativeHandle } from "react";

import "./NameInput.css";

import { NameInputProps } from "./NameInputProps";
import { NameInputReference } from "../../AppEditorReferences";

export default forwardRef((props: NameInputProps, ref) => {
  const inputReference = useRef<HTMLInputElement>(null);

  useImperativeHandle(
    ref,
    (): NameInputReference => ({
      getValue: (): string => {
        if (inputReference.current) {
          return inputReference.current.value;
        }

        return "";
      }
    })
  );

  return (
    <input
      ref={inputReference}
      className="NameInput"
      placeholder="New title"
      type="text"
      onChange={props.onChange}
      autoFocus={true}
    />
  );
});
