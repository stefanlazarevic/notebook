import React from "react";

import "./CloseButton.css";

import { MdClose } from "react-icons/md";

export default function CloseButton(props: any) {
  return (
    <button
      className="CloseButton"
      title="Close Editor"
      onClick={props.onClick}
    >
      <MdClose />
    </button>
  );
}
