import React from "react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdStrikethroughS
} from "react-icons/md";

import "./EditorBar.css";

export default function EditorBar(props: any) {
  return (
    <div id="EditorBar" className="EditorBar">
      <button
        className="EditorBar__button"
        onMouseDown={props.onBold}
        title="Bold"
      >
        <MdFormatBold />
      </button>
      <button
        className="EditorBar__button"
        onMouseDown={props.onItalic}
        title="Italic"
      >
        <MdFormatItalic />
      </button>
      <button
        className="EditorBar__button"
        onMouseDown={props.onUnderline}
        title="Underline"
      >
        <MdFormatUnderlined />
      </button>
      <button
        className="EditorBar__button"
        onMouseDown={props.onStrikethrough}
        title="Strikethrough"
      >
        <MdStrikethroughS />
      </button>
    </div>
  );
}
