import React from "react";

import "./Switch.css";

import { SwitchProps } from "./SwitchProps";

export default function Switch(props: SwitchProps) {
  return (
    <label htmlFor={props.id} className="Switch">
      <input
        id={props.id}
        name={props.name}
        type="checkbox"
        defaultChecked={props.defaultChecked}
        checked={props.checked}
        onChange={props.onChange}
        disabled={props.disabled}
      />
      <span className={`SwitchSlider ${props.rounded ? "round" : ""}`} />
    </label>
  );
}
