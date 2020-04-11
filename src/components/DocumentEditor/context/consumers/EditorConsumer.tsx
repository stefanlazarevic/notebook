import React, { useContext } from "react";

import { FontSizeContext } from "../providers/FontSizeContext";
import { ZoomContext } from "../providers/ZoomContext";
import { EditorStateContext } from "../providers/EditorStateContext";

import Editor from "../../components/Editor";

export default function EditorConsumer() {
  const [fontSize] = useContext(FontSizeContext);
  const [zoom, zoomDispatch] = useContext(ZoomContext);
  const [editorState, setEditorState] = useContext(EditorStateContext);

  function zoomIn() {
    if (zoom < 300) {
      zoomDispatch({ type: "ZOOM_IN", payload: 10 });
    }
  }

  function zoomOut() {
    if (zoom > 10) {
      zoomDispatch({ type: "ZOOM_OUT", payload: 10 });
    }
  }

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      fontSize={fontSize}
      zoom={zoom}
      onZoomIn={zoomIn}
      onZoomOut={zoomOut}
    />
  );
}
