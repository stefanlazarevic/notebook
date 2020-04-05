import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBack } from "react-icons/md";

import { AppState } from "../../../../redux/types";
import { openGroup } from "../../../../redux/notes/actions";
import utils from "../../../../utils";
import Button from "../../../UI/Button";
import { openDirectory } from "../../../../redux/drive/DriveActions";
import Path from "../../../../redux/drive/Path";

export default function BackButton() {
  const dispatch = useDispatch();

  const label = "Open parent folder";

  const cwd = useSelector(
    (state: AppState) => state.drive.cwd
  );

  const parentDirectory = useSelector((state: AppState) => {
    const dirname = Path.dirname(cwd);
    if (state.drive.fs[dirname]) {
      return dirname;
    }

    return undefined;
  });

  function onClick() {
    if (parentDirectory) {
      dispatch(openDirectory(parentDirectory));
    }
  }

  return (
    <Button
      title={label}
      aria-label={label}
      onClick={onClick}
      disabled={!Boolean(parentDirectory)}
    >
      <MdArrowBack aria-hidden={true} />
    </Button>
  );
}
