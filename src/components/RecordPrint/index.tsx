import React, { useEffect } from "react";
import { connect } from "react-redux";
import { AppState, IDispatch } from "../../redux/types";
import RecordPrint from "./RecordPrint";
import { createPortal } from "react-dom";
import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import { NoteRecordID } from "../../redux/notes/records/types";
import { queuePrintRecords } from "../../redux/print/actions";

function RecordPrintContainer(props: any) {
  useEffect(() => {
    console.log(props.printHTML);
    if (props.printHTML) {
      if (document && window) {
        const titleBeforePrinting = document.title;
        document.title = "Notebook";
        window.print();
        document.title = titleBeforePrinting;
      }

      if (typeof props.clearPrintQueue === "function") {
        props.clearPrintQueue();
      }
    }
  }, [props, props.printHTML]);

  return (
    <>
      {props.printHTML &&
        createPortal(
          <RecordPrint title={props.title} printHTML={props.printHTML} />,
          document.getElementById("print-mount")!
        )}
    </>
  );
}

function mapStateToProps(state: AppState) {
  const { print, notes } = state;
  const { records } = notes;

  const printHTML = print.reduce((html: string, id: NoteRecordID) => {
    const record = records[id];

    if (record) {
      const title = `<h2>${record.title}</h2>`;
      return html + title + stateToHTML(convertFromRaw(record.content));
    }

    return html;
  }, "");

  return {
    printHTML
  };
}

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    clearPrintQueue: () => dispatch(queuePrintRecords([]))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecordPrintContainer);
