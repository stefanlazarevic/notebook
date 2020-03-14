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
          moveToGroup={props.moveToGroup}
          onDoubleClick={props.openGroup}
          tabIndex={props.tabIndex}
          parent={props.parent}
          groupParent={props.groupParent}
          childrenCount={props.children.length}
          removeGroup={props.removeGroup}
          ungroup={props.ungroup}
        />
      ) : (
        <NoteRecord
          id={props.id}
          index={props.index}
          title={props.title}
          onClick={props.openEditor}
          onDrop={props.swapGroupChildren}
          tabIndex={props.tabIndex}
          moveToGroup={props.moveToGroup}
          parent={props.parent}
          groupParent={props.groupParent}
          removeRecord={props.removeRecord}
          ungroup={props.ungroup}
          renameRecord={props.renameRecord}
        />
      )}
    </>
  );
}
