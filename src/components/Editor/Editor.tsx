import React, { useRef, useMemo } from "react";
import { EditorState, Editor as DraftEditor, getDefaultKeyBinding, DraftHandleValue, RichUtils } from "draft-js";

import "./Editor.css";

import EditorProps from "./EditorProps";

import Key from "./utils/Keys";
import EditorCommand from "./utils/Commands";

function Editor(props: EditorProps) {
	const editorReference = useRef<DraftEditor>(null);

	const editorStyle = useMemo(
		() => ({
			fontSize: props.fontSize,
		}),
		[props.fontSize]
	);

	const draftEditorStyle = useMemo(
		() => ({
			fontSize: `${props.zoom! / 100}em`,
			lineHeight: `${props.zoom! / 100}em`,
		}),
		[props.zoom]
	);

	/**
	 *
	 * @param newEditorState
	 */
	function updateEditorState(newEditorState: EditorState) {
		if (typeof props.onChange === "function") {
			props.onChange(newEditorState);
		}
	}

	/**
	 * Funkcija za održavanje fokusa unutar editora i kada se klik dešava
	 * ispod poslednje linije teksta.
	 *
	 * @param event MouseDown SyntheticEvent.
	 */
	function onRootMouseDown(event: React.MouseEvent<HTMLElement>) {
		const target: HTMLElement = event.target as HTMLElement;
		const hasFocus = props.editorState.getSelection().getHasFocus();

		if (target.classList.contains("DraftEditor")) {
			event.preventDefault();

			if (!hasFocus && editorReference.current) {
				editorReference.current.focus();
			}

			updateEditorState(EditorState.moveFocusToEnd(props.editorState));
		}
	}

	/**
	 * Функција која мапира акције са тастатуре у прилагођене акције.
	 * Ова функција се позива пре `handleKeyCommand` а резултат се прослеђује
	 * као први параметар `handleKeyCommand` функције.
	 *
	 * @param event KeyboardEvent
	 */
	function keyBindingFunction(event: React.KeyboardEvent<any>): string | null {
		const isControlKey = event.ctrlKey;
		const isShiftKey = event.shiftKey;
		const keyCode = event.keyCode;
		const key: string | undefined = Key[keyCode];

		if (isControlKey && key === "b") {
			return EditorCommand.BOLD;
		}

		if (isControlKey && key === "i") {
			return EditorCommand.ITALIC;
		}

		if (isControlKey && key === "u") {
			return EditorCommand.UNDERLINE;
		}

		if (isControlKey && isShiftKey && key === "s") {
			return EditorCommand.STRIKETHROUGH;
		}

		if (isControlKey && key === "z") {
			return EditorCommand.UNDO;
		}

		if (isControlKey && key === "y") {
			return EditorCommand.REDO;
		}

		if (isControlKey && (key === "NumPad +" || key === "=")) {
			return EditorCommand.ZOOM_IN;
		}

		if (isControlKey && (key === "NumPad -" || key === "-")) {
			return EditorCommand.ZOOM_OUT;
		}

		return getDefaultKeyBinding(event);
	}

	/**
	 * Функција која обрађује прилагођене акције.
	 * Ова функција се позива након `keyBindingFunction`.
	 *
	 * @param command Обрађена команда прослеђена из `keyBindingFunction` функције.
	 * @param editorState Тренутно стање уређивача.
	 */
	function handleKeyCommand(command: EditorCommand, editorState: EditorState): DraftHandleValue {
		switch (command) {
			case EditorCommand.ZOOM_IN:
				props.onZoomIn && props.onZoomIn();
				return "handled";
			case EditorCommand.ZOOM_OUT:
				props.onZoomOut && props.onZoomOut();
				return "handled";
			case EditorCommand.BOLD:
				updateEditorState(RichUtils.toggleInlineStyle(editorState, EditorCommand.BOLD));
				return "handled";
			case EditorCommand.ITALIC:
				updateEditorState(RichUtils.toggleInlineStyle(editorState, EditorCommand.ITALIC));
				return "handled";
			case EditorCommand.UNDERLINE:
				updateEditorState(RichUtils.toggleInlineStyle(editorState, EditorCommand.UNDERLINE));
				return "handled";
			case EditorCommand.STRIKETHROUGH:
				updateEditorState(RichUtils.toggleInlineStyle(editorState, EditorCommand.STRIKETHROUGH));
				return "handled";
			case EditorCommand.UNDO:
				updateEditorState(EditorState.undo(editorState));
				return "handled";
			case EditorCommand.REDO:
				updateEditorState(EditorState.redo(editorState));
				return "handled";
			default:
				return "not-handled";
		}
	}

	return (
		<div className="Editor" style={editorStyle} onMouseDown={onRootMouseDown}>
			<main className="DraftEditor" style={draftEditorStyle}>
				<DraftEditor
					ref={editorReference}
					editorState={props.editorState}
					onChange={updateEditorState}
					keyBindingFn={keyBindingFunction}
					handleKeyCommand={handleKeyCommand}
					placeholder={props.placeholder}
				/>
			</main>
		</div>
	);
}

Editor.defaultProps = {
	fontSize: 16,
	zoom: 100,
};
Editor.displayName = "Editor";

export default Editor;
