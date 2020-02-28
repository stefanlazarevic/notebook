import React, { useState, useEffect } from "react";

import "./EditorTitle.css";

export default function EditorTitle(props: any) {
  const [value, setValue] = useState(props.initialValue || "");

  useEffect(() => {
    setValue(props.initialValue);
  }, [props.initialValue]);

  function handleInputChange(event?: React.ChangeEvent) {
    if (event) {
      setValue(event.target.nodeValue);
    }
  }

  return (
    <input
      type="text"
      className="EditorTitle"
      value={value}
      onChange={handleInputChange}
      placeholder="New title"
      autoFocus={value === ""}
    />
  );
}
