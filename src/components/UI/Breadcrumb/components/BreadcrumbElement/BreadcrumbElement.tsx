import React from "react";

import "./BreadcrumbElement.css";

import BreadcrumbElementProps from "./BreadcrumbElementProps";

export default function BreadcrumbElement(props: BreadcrumbElementProps) {
  return (
    <div {...props} className="BreadcrumbElement">
      {props.children}
    </div>
  );
}
