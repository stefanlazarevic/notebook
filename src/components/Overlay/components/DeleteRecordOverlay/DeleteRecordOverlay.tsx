import React from "react";
import { connect, batch } from "react-redux";

import "./DeleteRecordOverlay.css";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";

import { IDispatch } from "../../../../redux/types";
import { closeOverlay } from "../../../../redux/overlays/actions";
import { removeRecord } from "../../../../redux/notes/actions";
import { NoteRecordID } from "../../../../redux/notes/records/types";

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
      />
      <OverlayBody>
        <p>Are you sure you want to permanently delete this note?</p>
      </OverlayBody>
      <OverlayFooter>
        <button onClick={confirm}>Delete Note</button>
        <button onClick={props.onClose}>Keep Note</button>
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
