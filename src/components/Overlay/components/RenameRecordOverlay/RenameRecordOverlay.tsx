import React, { useRef } from "react";
import { connect, batch } from "react-redux";

import "./RenameRecordOverlay.css";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";

import { IDispatch, AppState } from "../../../../redux/types";
import { NoteRecord } from "../../../../redux/notes/records/types";
import { updateRecord } from "../../../../redux/notes/actions";
import { closeOverlay } from "../../../../redux/overlays/actions";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";
import FormInput from "../../../UI/FormInput/FormInput";

function RenameRecordOverlay(props: any) {
  const titleReference = useRef<HTMLInputElement>(null);

  function save(event: React.FormEvent) {
    console.log("Submitting");
    event.preventDefault();

    if (typeof props.onSave === "function") {
      let title = props.record.title;

      if (titleReference.current) {
        title = titleReference.current.value;
      }

      const record = { ...props.record, title };

      props.onSave(record, props.overlayID);
    }
  }

  return (
    <form className="RenameRecordOverlay" onSubmit={save}>
      <OverlayHeader
        id={props.id}
        title="Rename Note"
        onClose={props.onClose}
      ></OverlayHeader>
      <OverlayBody>
        <FormInput
          ref={titleReference}
          type="text"
          name="title"
          defaultValue={props.record.title}
          autoFocus={true}
        />
      </OverlayBody>
      <OverlayFooter>
        <button type="button">Save</button>
        <button onClick={props.onClose}>Cancel</button>
      </OverlayFooter>
    </form>
  );
}

function mapStateToProps(state: AppState, ownProps: any) {
  const { notes } = state;
  const { records } = notes;
  const record = records[ownProps.recordID];

  return {
    record
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onSave: (record: NoteRecord, id: string) => {
      batch(() => {
        dispatch(updateRecord(record));
        dispatch(closeOverlay(id));
      });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenameRecordOverlay);
