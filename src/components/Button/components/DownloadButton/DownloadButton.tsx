import React from "react";

import DownloadButtonProps from "./DownloadButtonProps";
import Button from "../../Button";
import Icon, { Icons } from "../../../Icon";

export default function DownloadButton(props: DownloadButtonProps) {
  const { size, ...buttonProps } = props;

  return (
    <Button className="DownloadButton" {...buttonProps}>
      {props.children ? <span>{props.children}</span> : null}
      <Icon icon={Icons.download} size={props.size} />
    </Button>
  );
}
