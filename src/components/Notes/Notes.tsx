import React from "react";

import "./Notes.css";

import utils from "../../utils";

import NoteContainer from "./components/Note";
import { MdNoteAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/types";
import { NotesProps } from "./NotesProps";

export default function Notes(props: NotesProps) {
  const currentGroupID = useSelector(
    (state: AppState) => state.notes.currentGroupID
  );

  const items = useSelector(
    (state: AppState) => state.notes.groups[currentGroupID].children
  );

  return (
    <div className="NotesWrapper">
      <div className="Notes">
        {utils.array.map((id: any[], index: number) => {
          return (
            <NoteContainer key={id} id={id} index={index} tabIndex={index} />
          );
        }, items)}
      </div>
      {!Boolean(items.length) && (
        <h4 className="EmptyNotesHeading">
          No records found. Create new record using <MdNoteAdd />
        </h4>
      )}
    </div>
  );
}
