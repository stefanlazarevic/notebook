import React from "react";

import "./Notes.css";

import utils from "../../utils";

import NoteContainer from "./components/Note";

export default function Notes(props: any) {
  return (
    <div className="Notes">
      {utils.array.map((id: any[], index: number) => {
        return (
          <NoteContainer key={id} id={id} index={index} tabIndex={index} />
        );
      }, props.children)}
    </div>
  );
}
