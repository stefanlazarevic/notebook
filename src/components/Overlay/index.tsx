import React from "react";
import { connect } from "react-redux";
import { createPortal } from "react-dom";

import "./OverlayContainer.css";

import { AppState, IDispatch } from "../../redux/types";
import utils from "../../utils";
import OverlayMap from "./OverlayMap";
import Overlay from "./Overlay";
import { OverlayContainerProps } from "./OverlayContainerProps";
import { Overlay as IOverlay, OverlayID } from "../../redux/overlays/types";
import { closeOverlay } from "../../redux/overlays/actions";

function OverlayContainer(props: OverlayContainerProps) {
  return props.overlays.length
    ? createPortal(
        <div className="OverlayContainer react-no-print">
          {utils.array.mapReversed((overlay: IOverlay) => {
            const OverlayComponent = OverlayMap.get(overlay.type);

            if (OverlayComponent) {
              return (
                <Overlay
                  key={overlay.overlayID}
                  overlayID={overlay.overlayID}
                  onClose={props.onClose}
                >
                  <OverlayComponent
                    overlayID={overlay.overlayID}
                    id={overlay.id}
                    onClose={props.onClose}
                  />
                </Overlay>
              );
            }

            return null;
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

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onClose: (overlayID: OverlayID) => dispatch(closeOverlay(overlayID))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayContainer);
