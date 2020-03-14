import React from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";

import "./OverlayContainer.css";

import { AppState } from "../../redux/types";
import utils from "../../utils";
import { OverlayType } from "../../redux/overlays/types";

import DeleteRecordOverlay from "./components/DeleteRecordOverlay/DeleteRecordOverlay";
import RenameRecordOverlay from "./components/RenameRecordOverlay/RenameRecordOverlay";

function OverlayContainer(props: any) {
  return props.overlays.length
    ? createPortal(
        <div className="OverlayContainer">
          {utils.array.mapReversed((overlay: any) => {
            switch (overlay.type) {
              case OverlayType.DELETE_RECORD:
                return (
                  <DeleteRecordOverlay
                    key={overlay.id}
                    {...props}
                    {...overlay}
                  />
                );
              case OverlayType.RENAME_RECORD:
                return (
                  <RenameRecordOverlay
                    key={overlay.id}
                    {...props}
                    {...overlay}
                  />
                );
              default:
                return null;
            }
          }, props.overlays)}
        </div>,
        document.getElementById("app-overlays-root") as HTMLDivElement
      )
    : null;
}

function mapStateToProps(state: AppState) {
  return {
    overlays: state.overlays
  };
}

export default connect(mapStateToProps)(OverlayContainer);
