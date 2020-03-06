import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useRef
} from "react";
import { EditorState, Editor as DraftEditor, convertToRaw } from "draft-js";

import "./Editor.css";

import { EditorReference } from "../../AppEditorReferences";
import { keyBindingFunction } from "./Shortcuts";
import { handleKeyCommands, EditorCommand } from "./Commands";
import { EditorProps } from "./EditorProps";
import EditorControls from "../../components/EditorControls/EditorControls";

export default forwardRef((props: EditorProps, ref: any) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const draftEditorReference = useRef<DraftEditor>(null);

  function updateEditorState(newEditorState: EditorState) {
    setEditorState(newEditorState);

    if (typeof props.onChange === "function") {
      const equalContents = newEditorState
        .getCurrentContent()
        .getBlockMap()
        .equals(editorState.getCurrentContent().getBlockMap());

      if (!equalContents) {
        props.onChange();
      }
    }
  }

  useImperativeHandle(
    ref,
    (): EditorReference => ({
      getPlainText: () => editorState.getCurrentContent().getPlainText(),
      getRawDraftContentState: () =>
        convertToRaw(editorState.getCurrentContent()),
      focusEditor,
      blurEditor
    })
  );

  function focusEditor() {
    if (draftEditorReference.current) {
      draftEditorReference.current.focus();
    }
  }

  function blurEditor() {
    if (draftEditorReference.current) {
      draftEditorReference.current.blur();
    }
  }

  function getCurrentInlineStyle() {
    return editorState.getCurrentInlineStyle();
  }

  function handleCommand(command: EditorCommand) {
    handleKeyCommands(updateEditorState)(command, editorState);
  }

  return (
    <div className="Editor">
      <EditorControls
        inlineStyles={getCurrentInlineStyle()}
        onClick={handleCommand}
      />
      <div className="EditorWrapper" onClick={focusEditor}>
        <DraftEditor
          ref={draftEditorReference}
          editorState={editorState}
          onChange={updateEditorState}
          keyBindingFn={keyBindingFunction}
          handleKeyCommand={handleKeyCommands(updateEditorState)}
          spellCheck={props.spellCheck}
        />
      </div>
    </div>
  );
});
