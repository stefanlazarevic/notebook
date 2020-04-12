import React from "react";
import { FiPlus } from "react-icons/fi";

import Button from "../../../UI/Button";
import { useDispatch } from "react-redux";
import { createNewTab } from "../../../../redux/tabs/actions";

export default function NewTabButton(props: any) {
  const dispatch = useDispatch();

  const label = "Create new tab";

  function onClick() {
    dispatch(createNewTab());
  }

  return (
    <Button title={label} aria-label={label} onClick={onClick}>
      <FiPlus />
    </Button>
  );
}
