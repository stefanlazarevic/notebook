import React, { useRef, useEffect } from "react";
import { connect, batch } from "react-redux";

import "./RenameRecordOverlay.css";

import OverlayHeader from "../../template/OverlayHeader/OverlayHeader";

import { IDispatch, AppState } from "../../../../redux/types";
import { NoteRecord } from "../../../../redux/notes/records/types";
import { updateRecord } from "../../../../redux/notes/actions";
import { closeOverlay } from "../../../../redux/overlays/actions";
import OverlayBody from "../../template/OverlayBody/OverlayBody";
import OverlayFooter from "../../template/OverlayFooter/OverlayFooter";
import { KeycodeMap } from "../../../AppEditor/layout/Editor/Shortcuts";
import utils from "../../../../utils";

function RenameRecordOverlay(props: any) {
  const titleReference = useRef<HTMLInputElement>(null);
  let overlayTabElements = useRef<any>([]);

  useEffect(() => {
    if (overlayTabElements.current) {
      overlayTabElements.current = utils.dom.getTabbableElements(
        "RenameRecordOverlay"
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
      let title = props.record.title;

      if (titleReference.current) {
        title = titleReference.current.value;
      }

      const record = { ...props.record, title };

      props.onConfirm(record, props.id);
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

  function handleInputKeyDown(event: React.KeyboardEvent<any>) {
    const { keyCode } = event;
    const key = KeycodeMap[keyCode];

    if (key === "enter") {
      event.preventDefault();
      confirm();
    }
  }

  return (
    <div
      id="RenameRecordOverlay"
      className="RenameRecordOverlay"
      onKeyDown={handleKeyDown}
    >
      <OverlayHeader
        id={props.id}
        title="Rename Note"
        onClose={close}
      ></OverlayHeader>
      <OverlayBody>
        <input
          ref={titleReference}
          type="text"
          defaultValue={props.record.title}
          autoFocus={true}
          onKeyDown={handleInputKeyDown}
        />
      </OverlayBody>
      <OverlayFooter>
        <button onClick={confirm} tabIndex={0}>
          Confirm
        </button>
        <button onClick={close} tabIndex={0}>
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
    },
    onClose: (id: string) => dispatch(closeOverlay(id))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RenameRecordOverlay);
