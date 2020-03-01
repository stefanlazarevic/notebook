import React from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS,
  MdFormatClear
} from "react-icons/md";

import "./EditorBar.css";

import EditorBarButton from "./components/Button/EditorBarButton";
import { EditorInlineStyleTypes } from "../../StyleMap";

export default function EditorBar(props: any) {
  function handleButtonClick(
    event: React.MouseEvent,
    action?: EditorInlineStyleTypes
  ) {
    if (typeof props.onAction === "function") {
      props.onAction(event, action);
    }
  }

  return (
    <div id="EditorBar" className="EditorBar">
      <EditorBarButton
        onClick={handleButtonClick}
        action={EditorInlineStyleTypes.BOLD}
        title="Bold"
      >
        <MdFormatBold />
      </EditorBarButton>
      <EditorBarButton
        onClick={handleButtonClick}
        action={EditorInlineStyleTypes.ITALIC}
        title="Italic"
      >
        <MdFormatItalic />
      </EditorBarButton>
      <EditorBarButton
        onClick={handleButtonClick}
        action={EditorInlineStyleTypes.UNDERLINE}
        title="Underline"
      >
        <MdFormatUnderlined />
      </EditorBarButton>
      <EditorBarButton
        onClick={handleButtonClick}
        action={EditorInlineStyleTypes.STRIKETHROUGH}
        title="Strikethrough"
      >
        <MdStrikethroughS />
      </EditorBarButton>
      <EditorBarButton onClick={props.onReset} title="Clear formatting">
        <MdFormatClear />
      </EditorBarButton>
    </div>
  );
}
