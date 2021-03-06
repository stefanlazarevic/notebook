import React, { forwardRef } from "react";

import "./Header.css";

import { AppEditorHeaderProps } from "./HeaderProps";
import ResizeButton from "../../components/ResizeButton/ResizeButton";
import CloseButton from "../../components/CloseButton/CloseButton";
import NameInput from "../../components/NameInput/NameInput";
import ChangeIndicator from "../../components/ChangeIndicator/ChangeIndicator";
import SaveButton from "../../components/SaveButton/SaveButton";

export default forwardRef((props: AppEditorHeaderProps, ref: any) => {
  return (
    <div className="AppEditorHeader">
      <NameInput
        ref={ref}
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
      <ChangeIndicator state={props.indicatorState} />
      <SaveButton onClick={props.onSave} />
      <ResizeButton maximized={props.maximized} onClick={props.onResize} />
      <CloseButton onClick={props.onClose} />
    </div>
  );
});
