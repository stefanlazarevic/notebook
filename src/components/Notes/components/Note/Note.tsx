import React from "react";

import NoteGroup from "../Group/Group";
import NoteRecord from "../Record/Record";
import { useSelector } from "react-redux";
import { AppState } from "../../../../redux/types";
import { NoteGroup as INoteGroup } from "../../../../redux/notes/groups/types";
import { NoteRecord as INoteRecord } from "../../../../redux/notes/records/types";

export default function Note(props: any) {
  const item = useSelector((state: AppState): INoteGroup | INoteRecord => {
    const { notes } = state;
    const { records, groups } = notes;

    return records[props.id] || groups[props.id];
  });

  return (
    <>
      {item.children ? (
        <NoteGroup {...item} index={props.index} />
      ) : (
        <NoteRecord {...item} index={props.index} />
      )}
    </>
  );
}
