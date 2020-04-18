import * as React from "react";
import SVG from "react-inlinesvg";

import "./Icon.css";

import IconProps from "./IconProps";

export default function Icon(props: IconProps) {
  return (
    <SVG
      src={`/icons/${props.icon}.svg`}
      className="Icon"
      width={props.size}
      height={props.size}
    />
  );
}
