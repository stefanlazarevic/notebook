import React from "react";
import { batch, useDispatch } from "react-redux";

import "./DeleteRecordOverlay.css";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";

import { closeOverlay } from "../../../../redux/overlays/actions";
import { removeRecord } from "../../../../redux/notes/actions";

export default function DeleteRecordOverlay(props: any) {
  const dispatch = useDispatch();

  function confirm() {
    batch(() => {
      dispatch(removeRecord(props.id));
      dispatch(closeOverlay(props.overlayID));
    });
  }

  return (
    <div className="DeleteRecordOverlay">
      <OverlayHeader
        id={props.overlayID}
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
