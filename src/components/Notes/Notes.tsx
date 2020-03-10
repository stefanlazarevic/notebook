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
                if (props.getGroup(id)) {
                  return (
                    <NoteGroup
                      key={id}
                      id={id}
                      index={index}
                      onDrop={props.moveToGroup}
                      onDoubleClick={props.openGroup}
                    />
                  );
                }

                return <Note key={id} id={id} index={index} />;
              })}
            </div>
          );
        })}
    </div>
  );
}
