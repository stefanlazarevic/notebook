import React from "react";
import { useDispatch } from "react-redux";
import { MdHome } from "react-icons/md";

import Button from "../../../UI/Button";
import { openRootDirectory } from "../../../../redux/drive/DriveActions";

export default function HomeButton() {
  const dispatch = useDispatch();

  const label = "Open root folder";

  function onClick() {
    dispatch(openRootDirectory());
  }

  return (
    <Button onClick={onClick} title={label} aria-label={label}>
      <MdHome aria-hidden={true} />
    </Button>
  );
}
