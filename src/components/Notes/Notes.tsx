import React from "react";

import "./Notes.css";

import utils from "../../utils";

import NoteContainer from "./components/Note";
import { MdNoteAdd } from "react-icons/md";

export default function Notes(props: any) {
  return (
    <div className="NotesWrapper">
      <div className="Notes">
        {utils.array.map((id: any[], index: number) => {
          return (
            <NoteContainer key={id} id={id} index={index} tabIndex={index} />
          );
        }, props.children)}
      </div>
      {!Boolean(props.children.length) && (
        <h4 className="EmptyNotesHeading">
          No records found. Create new record using <MdNoteAdd />
        </h4>
      )}
    </div>
  );
}
