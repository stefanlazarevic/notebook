import React from "react";
import { MdHome } from "react-icons/md";

import "./HomeButton.css";

export function HomeButton(props: any) {
  return (
    <button className="HomeButton" onClick={props.onClick} title="Back to root">
      <MdHome />
    </button>
  );
}
