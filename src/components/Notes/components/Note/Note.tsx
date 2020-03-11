import React from "react";

import NoteGroup from "../Group/Group";
import NoteRecord from "../Record/Record";

export default function Note(props: any) {
  return (
    <>
      {props.children ? (
        <NoteGroup
          id={props.id}
          index={props.index}
          title={props.title}
          onDrop={props.moveToGroup}
          onDoubleClick={props.openGroup}
          tabIndex={props.tabIndex}
        />
      ) : (
        <NoteRecord
          id={props.id}
          index={props.index}
          title={props.title}
          onClick={props.openEditor}
          onDrop={props.swapGroupChildren}
          tabIndex={props.tabIndex}
        />
      )}
    </>
  );
}
