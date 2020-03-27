import React from "react";
import { useDispatch } from "react-redux";
import { MdHome } from "react-icons/md";

import "./HomeButton.css";

import { openGroup } from "../../../../redux/notes/actions";
import Button from "../../../UI/Button";

export default function HomeButton() {
  const dispatch = useDispatch();

  const label = "Open root folder";

  function onClick() {
    dispatch(openGroup("root"));
  }

  return (
    <Button onClick={onClick} title={label} aria-label={label}>
      <MdHome aria-hidden={true} />
    </Button>
  );
}
