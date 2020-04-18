import React from "react";

import BackButtonProps from "./BackButtonProps";
import Button from "../../Button";
import Icon, { Icons } from "../../../Icon";

export default function BackButton(props: BackButtonProps) {
  const { size, ...buttonProps } = props;

  return (
    <Button className="BackButton" {...buttonProps}>
      {props.children ? <span>{props.children}</span> : null}
      <Icon icon={Icons.chevronLeft} size={props.size} />
    </Button>
  );
}
