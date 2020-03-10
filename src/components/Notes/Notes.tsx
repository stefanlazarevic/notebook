import React from "react";
import Note from "./components/Note/Note";

import "./Notes.css";

import NoteGroup from "./components/Group/Group";
import utils from "../../utils";

export default function Notes(props: any) {
  return (
    <div className="Notes">
      {utils.array
        .chunk(props.records, 7)
        .map((chunk: any[], index: number) => {
          return (
            <div className="NotesRow" key={index}>
              {chunk.map(id => {
                const item = props.getGroup(id) || props.getRecord(id);

                return <Note key={item.id} id={item.id} title={item.title} />;
              })}
            </div>
          );
        })}

      <NoteGroup />
      <NoteGroup />
      <NoteGroup />
      <NoteGroup />
    </div>
  );
}
