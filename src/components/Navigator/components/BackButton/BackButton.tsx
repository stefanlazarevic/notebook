import React from "react";
import { MdArrowBack } from "react-icons/md";

import "./BackButton.css";

export default function BackButton(props: any) {
  return (
    <button className="BackButton" title="Go back" onClick={props.onClick}>
      <MdArrowBack />
    </button>
  );
}
