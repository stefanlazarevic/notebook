import React from "react";

import './DriveTab.css';

import DriveTabProps from "./DriveTabProps";

export default function DriveTab(props: DriveTabProps) {
  const match = props.path.match(/^(.+)\/([^/]+)$/);

  const basename = match && match[2] ? match[2] : undefined;

  return <button className="DriveTab">{basename}</button>;
}
