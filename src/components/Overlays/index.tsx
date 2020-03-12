import React from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";

import "./OverlayContainer.css";

import ConfirmationOverlay from "./components/Confirmation/Confirmation";
import { AppState } from "../../redux/types";
import utils from "../../utils";
import { OverlayType } from "../../redux/overlays/types";

function OverlayContainer(props: any) {
  return props.overlays.length
    ? createPortal(
        <div className="OverlayContainer">
          {utils.array.mapReversed((overlay: any, index: number) => {
            switch (overlay.type) {
              case OverlayType.CONFIRMATION:
                return <ConfirmationOverlay key={overlay.id} {...overlay} />;
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

export default connect(mapStateToProps, null)(OverlayContainer);
