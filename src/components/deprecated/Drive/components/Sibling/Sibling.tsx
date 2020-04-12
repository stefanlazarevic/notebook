import React from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../../../redux/types";
import SiblingProps from "./SiblingProps";
import { FileSystemTypes } from "../../../../redux/drive/DriveTypes";
import Directory from "../Directory/Directory";

export default function Sibling(props: SiblingProps) {
  const sibling = useSelector((state: AppState) => {
    return state.drive.fs[props.path];
  });

  if (!sibling) {
    return null;
  }

  switch (sibling.type) {
    case FileSystemTypes.DIRECTORY:
      return <Directory {...props} path={props.path} />;
    case FileSystemTypes.FILE:
      return null;
    default:
      return null;
  }
}
