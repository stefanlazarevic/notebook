import React from "react";

import "./Notes.css";

import utils from "../../utils";

import NoteContainer from "./components/Note";
import { MdNoteAdd } from "react-icons/md";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/types";
import { NotesProps } from "./NotesProps";
import { NoteGroupID } from "../../redux/notes/groups/types";
import { NoteRecordID } from "../../redux/notes/records/types";

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
        {utils.array.map((id: NoteGroupID | NoteRecordID, index: number) => {
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
