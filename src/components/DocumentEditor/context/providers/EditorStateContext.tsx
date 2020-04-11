import React, { createContext, useState } from "react";
import { EditorState } from "draft-js";

export const EditorStateContext = createContext<any>(undefined);

export default function EditorStateContextProvider(props: any) {
  const [editorState, setEditorState] = useState(
    props.editorState || EditorState.createEmpty()
  );

  return (
    <EditorStateContext.Provider value={[editorState, setEditorState]}>
      {props.children}
    </EditorStateContext.Provider>
  );
}
