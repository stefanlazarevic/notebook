import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle
} from "react";
import {
  Editor as DraftEditor,
  EditorState,
  RichUtils,
  Modifier,
  ContentState
} from "draft-js";

import "./Editor.css";

import EditorBar from "./components/EditorBar/EditorBar";
import {
  customStyleMap,
  EditorInlineStyleTypes,
  INLINE_STYLES
} from "./StyleMap";

const Editor = forwardRef((props: any, ref: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const draftEditorRef = useRef<any>();

  function toggleInlineStyle(
    event: React.MouseEvent,
    style: EditorInlineStyleTypes
  ) {
    if (event) {
      event.preventDefault();
    }

    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  }

  function clearInlineStyles(event: React.MouseEvent) {
    if (event) {
      event.preventDefault();
    }

    setEditorState(
      EditorState.createWithContent(
        INLINE_STYLES.reduce(
          (
            contentState: ContentState,
            INLINE_STYLE: EditorInlineStyleTypes
          ) => {
            return Modifier.removeInlineStyle(
              contentState,
              editorState.getSelection(),
              INLINE_STYLE
            );
          },
          editorState.getCurrentContent()
        )
      )
    );
  }

  useImperativeHandle(ref, () => ({
    getPlainText() {
      return editorState.getCurrentContent().getPlainText();
    },
    focus() {
      draftEditorRef.current.focus();
    },
    blur() {
      draftEditorRef.current.blur();
    }
  }));

  function focus() {
    if (draftEditorRef && draftEditorRef.current && editorState) {
      if (!editorState.getSelection().getHasFocus()) {
        setEditorState(EditorState.moveFocusToEnd(editorState));
      }
    }
  }

  return (
    <div id="Editor" className="Editor" onClick={focus}>
      <div className="EditorBar__wrapper">
        <EditorBar onAction={toggleInlineStyle} onReset={clearInlineStyles} />
      </div>
      <div className="DraftEditor__wrapper">
        <DraftEditor
          ref={draftEditorRef}
          editorState={editorState}
          onChange={setEditorState}
          customStyleMap={customStyleMap}
        />
      </div>
    </div>
  );
});

export default Editor;
