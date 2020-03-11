import React from "react";

import "./Notes.css";

import utils from "../../utils";

import NoteContainer from "./components/Note";

export default function Notes(props: any) {
  return (
    <div className="Notes">
      {utils.array
        .chunk(props.children, 7)
        .map((chunk: any[], rowIndex: number) => {
          return (
            <div className="NotesRow" key={rowIndex}>
              {chunk.map((id: string, index: number) => {
                return (
                  <NoteContainer
                    key={id}
                    id={id}
                    index={index}
                    tabIndex={rowIndex + index}
                  />
                );
              })}
            </div>
          );
        })}
    </div>
  );
}
