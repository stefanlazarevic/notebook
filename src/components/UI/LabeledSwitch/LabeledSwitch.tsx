import React from "react";
import Switch from "../Switch/Switch";

import "./LabeledSwitch.css";

import { LabeledSwitchProps } from "./LabeledSwitchProps";

export default function LabeledSwitch(props: LabeledSwitchProps) {
  return (
    <div className="LabeledSwitch">
      <label htmlFor={props.id}>{props.label}</label>
      <Switch
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        disabled={props.disabled}
        checked={props.checked}
        defaultChecked={props.defaultChecked}
      />
    </div>
  );
}
