import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdArrowBack } from "react-icons/md";

import "./BackButton.css";
import { AppState } from "../../../../redux/types";
import { openGroup } from "../../../../redux/notes/actions";
import utils from "../../../../utils";

export default function BackButton(props: any) {
  const dispatch = useDispatch();

  const currentGroupId = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const parentGroupId = useSelector((state: AppState) =>
    utils.array.last(state.notes.groups[currentGroupId].path)
  );

  function goBack() {
    if (parentGroupId) {
      dispatch(openGroup(parentGroupId));
    }
  }

  return (
    <button
      className="BackButton"
      title="Go back"
      onClick={goBack}
      disabled={!Boolean(parentGroupId)}
    >
      <MdArrowBack />
    </button>
  );
}
