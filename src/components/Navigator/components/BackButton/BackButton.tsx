import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBack } from "react-icons/md";

import { AppState } from "../../../../redux/types";
import { openGroup } from "../../../../redux/notes/actions";
import utils from "../../../../utils";
import Button from "../../../UI/Button";

export default function BackButton() {
  const dispatch = useDispatch();

  const label = "Open parent folder";

  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const parentGroupId = useSelector((state: AppState) =>
    utils.array.last(state.notes.groups[currentGroupId].path)
  );

  function onClick() {
    if (parentGroupId) {
      dispatch(openGroup(parentGroupId));
    }
  }

  return (
    <Button
      title={label}
      aria-label={label}
      onClick={onClick}
      disabled={!Boolean(parentGroupId)}
    >
      <MdArrowBack aria-hidden={true} />
    </Button>
  );
}
