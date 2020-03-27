import React from "react";
import { useDispatch } from "react-redux";
import { openEditor } from "../../../../redux/editor/actions";
import Button from "../../../UI/Button";
import { MdNoteAdd } from "react-icons/md";

export default function CreateNewFileButton() {
  const dispatch = useDispatch();

  const label = "Create new note";

  function onClick() {
    dispatch(openEditor());
  }

  return (
    <Button onClick={onClick} title={label} aria-label={label}>
      <MdNoteAdd aria-hidden={true} />
    </Button>
  );
}
