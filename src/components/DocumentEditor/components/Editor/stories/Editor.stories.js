import React from 'react';
import { EditorState } from 'draft-js';

import { addDecorator, addParameters } from '@storybook/react';
import { number, withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Store, withState } from "@sambego/storybook-state";

import Editor from "../Editor";

const EditorWithState = props => {
    return (
        <Editor
            editorState={props.editorState}
            onChange={props.changeEditorState}
            placeholder={text('placeholder', 'Start typing here...')}
            fontSize={number('fontSize', 16)}
            zoom={number('zoom', 100)}
            onZoomIn={action('onZoomIn action executed')}
            onZoomOut={action('onZoomOut action executed')}
        />
    );
};

const store = new Store({
    editorState: EditorState.createEmpty(),
    changeEditorState: (editorState) => store.set({ editorState }),
});

addDecorator(withKnobs);
addDecorator(withState());
addParameters({
    state: {
        store
    }
});

export default { title: "DocumentEditor/components/Editor" };

export const Preview = () => EditorWithState;