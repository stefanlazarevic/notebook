import React from "react";

import "./StatusBar.css";

import IStatusBarProps from "./StatusBarProps";

import SelectionStatusConsumer from "../../context/consumers/SelectionStatusConsumer";
import ZoomStatusConsumer from "../../context/consumers/ZoomStatusConsumer";

export default function StatusBar(props: IStatusBarProps) {
  return (
    <footer className="StatusBar">
      <SelectionStatusConsumer />
      <ZoomStatusConsumer />
    </footer>
  );
}
