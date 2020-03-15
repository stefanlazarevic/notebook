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

function RenameRecordOverlay(props: any) {
  const titleReference = useRef<HTMLInputElement>(null);

  function confirm() {
    if (typeof props.onConfirm === "function") {
      let title = props.record.title;

      if (titleReference.current) {
        title = titleReference.current.value;
      }

      const record = { ...props.record, title };

      props.onConfirm(record, props.overlayID);
    }
  }

  return (
    <div className="RenameRecordOverlay">
      <OverlayHeader
        id={props.id}
        title="Rename Note"
        onClose={props.onClose}
      ></OverlayHeader>
      <OverlayBody>
        <input
          ref={titleReference}
          type="text"
          defaultValue={props.record.title}
          autoFocus={true}
        />
      </OverlayBody>
      <OverlayFooter>
        <button onClick={confirm} tabIndex={0}>
          Confirm
        </button>
        <button onClick={props.onClose} tabIndex={0}>
          Cancel
        </button>
      </OverlayFooter>
    </div>
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
    onConfirm: (record: NoteRecord, id: string) => {
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
