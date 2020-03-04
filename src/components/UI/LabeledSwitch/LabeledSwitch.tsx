import React from "react";
import Switch from "../Switch/Switch";

import "./LabeledSwitch.css";

export default function LabeledSwitch(props: any) {
  return (
    <div className="LabeledSwitch">
      <label htmlFor={props.id}>{props.label}</label>
      <Switch id={props.id} name={props.name} onChange={props.onChange} />
    </div>
  );
}
