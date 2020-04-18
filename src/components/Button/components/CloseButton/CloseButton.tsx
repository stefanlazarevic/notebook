import React from "react";

import "./CloseButton.css";

import CloseButtonProps from "./CloseButtonProps";

import Button from "../../Button";
import Icon, { Icons } from "../../../Icon";

export default function CloseButton(props: CloseButtonProps) {
  const { size, ...buttonProps } = props;

  return (
    <Button className="CloseButton" {...buttonProps}>
      {props.children ? <span>{props.children}</span> : null}
      <Icon icon={Icons.close} size={props.size} />
    </Button>
  );
}
