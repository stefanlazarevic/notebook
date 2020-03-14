import React, { useEffect, useRef } from "react";
import { connect, batch } from "react-redux";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import { IDispatch } from "../../../../redux/types";
import { closeOverlay } from "../../../../redux/overlays/actions";
import { removeRecord } from "../../../../redux/notes/actions";
import { NoteRecordID } from "../../../../redux/notes/records/types";

import "./DeleteRecordOverlay.css";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";
import utils from "../../../../utils";

function DeleteRecordOverlay(props: any) {
  let overlayTabElements = useRef<any>([]);

  useEffect(() => {
    if (overlayTabElements.current) {
      overlayTabElements.current = utils.dom.getTabbableElements(
        "DeleteRecordOverlay"
      );
    }

    return () => {
      if (overlayTabElements.current) {
        overlayTabElements.current = [];
      }
    };
  }, []);

  function close() {
    if (typeof props.onClose === "function") {
      props.onClose(props.id);
    }
  }

  function confirm() {
    if (typeof props.onConfirm === "function") {
      props.onConfirm(props.recordID, props.id);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<any>) {
    const { keyCode, target } = event;
    const isShiftKey = event.shiftKey;
    const key = KeycodeMap[keyCode];

    if (key === "esc") {
      close();
    }

    if (key === "tab" && isShiftKey) {
      if (
        overlayTabElements &&
        target === utils.array.first(overlayTabElements.current)
      ) {
        event.preventDefault();

        utils.array.last(overlayTabElements.current).focus();
      }

      return;
    }

    if (key === "tab") {
      if (
        overlayTabElements &&
        target === utils.array.last(overlayTabElements.current)
      ) {
        event.preventDefault();

        utils.array.first(overlayTabElements.current).focus();
      }
    }
  }

  return (
    <div
      id="DeleteRecordOverlay"
      className="DeleteRecordOverlay"
      onKeyDown={handleKeyDown}
    >
      <OverlayHeader
        id={props.id}
        onClose={close}
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
        <button onClick={close} tabIndex={0}>
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
    },
    onClose: (id: string) => dispatch(closeOverlay(id))
  };
}

export default connect(null, mapDispatchToProps)(DeleteRecordOverlay);
