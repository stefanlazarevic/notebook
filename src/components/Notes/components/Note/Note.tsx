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
          renameGroup={props.renameGroup}
        />
      ) : (
        <NoteRecord
          id={props.id}
          index={props.index}
          title={props.title}
          onOpen={props.openEditor}
          onSwap={props.swapGroupChildren}
          tabIndex={props.tabIndex}
          parent={props.parent}
          currentGroupParent={props.groupParent}
          onRemove={props.removeRecord}
          onUngroup={props.ungroup}
          onRename={props.renameRecord}
          content={props.content}
        />
      )}
    </>
  );
}
