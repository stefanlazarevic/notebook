import React from "react";
import { connect, batch } from "react-redux";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import { IDispatch } from "../../../../redux/types";
import { closeOverlay } from "../../../../redux/overlays/actions";
import { removeRecord } from "../../../../redux/notes/actions";
import { NoteRecordID } from "../../../../redux/notes/records/types";

import "./DeleteRecordOverlay.css";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";

function DeleteRecordOverlay(props: any) {
  function confirm() {
    if (typeof props.onConfirm === "function") {
      props.onConfirm(props.recordID, props.overlayID);
    }
  }

  return (
    <div className="DeleteRecordOverlay">
      <OverlayHeader
        id={props.id}
        onClose={props.onClose}
        title="Delete Note"
        tabIndex={0}
      />
      <OverlayBody>
        <p>Are you sure you want to permanently delete this note?</p>
      </OverlayBody>
      <OverlayFooter>
        <button onClick={confirm} tabIndex={0}>
          Delete Note
        </button>
        <button onClick={props.onClose} tabIndex={0}>
          Keep Note
        </button>
      </OverlayFooter>
    </div>
  );
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onConfirm: (recordID: NoteRecordID, id: string) => {
      batch(() => {
        dispatch(removeRecord(recordID));
        dispatch(closeOverlay(id));
      });
    }
  };
}

export default connect(null, mapDispatchToProps)(DeleteRecordOverlay);
