import React from "react";

export default function RecordPrint(props: any) {
  return (
    <div>
      <h1>{props.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.printHTML }}></div>
    </div>
  );
}
