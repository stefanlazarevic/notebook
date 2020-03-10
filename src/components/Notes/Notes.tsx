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
        .map((chunk: any[], rowIndex: number) => {
          return (
            <div className="NotesRow" key={rowIndex}>
              {chunk.map((id, index: number) => {
                if (props.getGroup(id)) {
                  const group = props.getGroup(id);

                  return (
                    <NoteGroup
                      key={id}
                      id={id}
                      index={index}
                      onDrop={props.moveToGroup}
                      onDoubleClick={props.openGroup}
                      title={group.title}
                    />
                  );
                }

                const record = props.getRecord(id);

                return (
                  <Note
                    key={id}
                    id={id}
                    index={index}
                    title={record.title}
                    onDrop={props.swapGroupChildren}
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
