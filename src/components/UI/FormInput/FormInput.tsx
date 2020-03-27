import React, { forwardRef } from "react";

import "./FormInput.css";

export default forwardRef((props: any, ref: any) => {
  return (
    <input
      ref={ref}
      type={props.type}
      placeholder={props.placeholder}
      className="FormInput"
      autoFocus={props.autoFocus}
      defaultValue={props.defaultValue}
      name={props.name}
      autoComplete={props.autoComplete}
    />
  );
});
