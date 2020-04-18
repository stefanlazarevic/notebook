import React from "react";

import "./Icon.css";

import IconProps from "./IconProps";
import Icons from "./Icons";

export default function Icon(props: IconProps) {
  const icon = Icons[props.icon];

  return (
    <img
      className="Icon"
      src={`/icons/${icon}.svg`}
      alt={icon}
      width={props.size}
      height={props.size}
    />
  );
}
