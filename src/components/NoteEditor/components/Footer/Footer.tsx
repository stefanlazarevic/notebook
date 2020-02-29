import React from "react";

import "./Footer.css";

export default function Footer(props: any) {
  return (
    <footer id="NoteEditorFooter" className="NoteEditorFooter">
      <button className="NoteEditorFooter__button" onClick={props.onSave}>
        Save
      </button>
    </footer>
  );
}
