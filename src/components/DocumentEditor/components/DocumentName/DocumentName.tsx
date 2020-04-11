import React from "react";

import "./DocumentName.css";

import IDocumentNameProps from "./DocumentNameProps";

export default function DocumentName(props: IDocumentNameProps) {
  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.currentTarget.value;

    if (typeof props.onChange === "function") {
      props.onChange(event, value);
    }
  }

  return (
    <input
      type="text"
      className="DocumentName"
      placeholder="Document name"
      value={props.name}
      onChange={onChange}
    />
  );
}
