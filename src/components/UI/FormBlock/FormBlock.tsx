import React from "react";

import "./FormBlock.css";

import { FormBlockProps } from "./FormBlockProps";

export default function FormBlock(props: FormBlockProps) {
  return <div className="FormBlock">{props.children}</div>;
}
