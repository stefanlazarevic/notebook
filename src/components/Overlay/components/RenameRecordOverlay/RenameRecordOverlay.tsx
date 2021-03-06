import React, { useRef } from "react";
import { batch, useDispatch, useSelector } from "react-redux";

import "./RenameRecordOverlay.css";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";

import { updateRecord } from "../../../../redux/notes/actions";
import { closeOverlay } from "../../../../redux/overlays/actions";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";
import FormInput from "../../../UI/FormInput/FormInput";
import { AppState } from "../../../../redux/types";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";

export default function RenameRecordOverlay(props: any) {
  const dispatch = useDispatch();

  const record = useSelector(
    (state: AppState) => state.notes.records[props.id]
  );

  const titleReference = useRef<HTMLInputElement>(null);

  function save() {
    let title = record.title;

    if (titleReference.current) {
      title = titleReference.current.value;
    }

    const updatedRecord = { ...record, title };

    batch(() => {
      dispatch(updateRecord(updatedRecord));
      dispatch(closeOverlay(props.overlayID));
    });
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "enter") {
      event.preventDefault();

      save();
    }
  }

  return (
    <div className="RenameRecordOverlay" onKeyDown={handleKeyDown}>
      <OverlayHeader
        id={props.overlayID}
        title="Rename Note"
        onClose={props.onClose}
      ></OverlayHeader>
      <OverlayBody>
        <FormInput
          ref={titleReference}
          type="text"
          name="title"
          defaultValue={record.title}
          autoFocus={true}
          autoComplete="off"
        />
      </OverlayBody>
      <OverlayFooter>
        <button onClick={save}>Save</button>
        <button onClick={props.onClose}>Cancel</button>
      </OverlayFooter>
    </div>
  );
}
