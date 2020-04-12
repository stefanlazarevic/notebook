import React from "react";
import { EditorState } from "draft-js";

import { storiesOf } from "@storybook/react";
import { number, withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Editor from "../Editor";
import { useState } from "@storybook/addons";

storiesOf("DocumentEditor/components/Editor", module)
  .addDecorator(withKnobs)
  .add("Preview", () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    return (
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder={text("placeholder", "Start typing here...")}
        fontSize={number("fontSize", 16)}
        zoom={number("zoom", 100)}
        onZoomIn={action("onZoomIn action executed")}
        onZoomOut={action("onZoomOut action executed")}
      />
    );
  });

// const EditorWithState = (props: any) => {
//   return (
//     <Editor
//       editorState={props.editorState}
//       onChange={props.changeEditorState}
//       placeholder={text("placeholder", "Start typing here...")}
//       fontSize={number("fontSize", 16)}
//       zoom={number("zoom", 100)}
//       onZoomIn={action("onZoomIn action executed")}
//       onZoomOut={action("onZoomOut action executed")}
//     />
//   );
// };

// const store = new Store({
//   editorState: EditorState.createEmpty(),
//   changeEditorState: (editorState: EditorState) => store.set({ editorState })
// });

// addDecorator(withKnobs);
// addDecorator(withState());
// addParameters({
//   state: {
//     store
//   },
//   info: {
//     text: "test"
//   }
// });

// export default { title: "DocumentEditor/components/Editor" };

// export const Preview = () => EditorWithState;
