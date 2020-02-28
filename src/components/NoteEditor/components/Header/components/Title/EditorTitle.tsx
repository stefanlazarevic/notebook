import React, { forwardRef, useImperativeHandle, useRef } from "react";

import "./EditorTitle.css";

const EditorTitle = forwardRef((props: any, ref: any) => {
  const inputRef = useRef<any>();
  // const [value, setValue] = useState(props.initialValue || "");

  // function handleInputChange(event?: React.ChangeEvent<HTMLInputElement>) {
  //   if (event) {
  //     setValue(event.target.value);
  //   }
  // }

  useImperativeHandle(ref, () => ({
    getValue() {
      return inputRef.current ? inputRef.current.value : "";
    }
  }));

  return (
    <input
      type="text"
      className="EditorTitle"
      ref={inputRef}
      defaultValue={props.initialValue}
      placeholder="New title"
    />
  );
});

export default EditorTitle;
