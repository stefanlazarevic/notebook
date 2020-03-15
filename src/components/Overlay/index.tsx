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
        <div className="OverlayContainer">
          {utils.array.mapReversed((overlay: IOverlay) => {
            const OverlayComponent = OverlayMap.get(overlay.type);

            if (OverlayComponent) {
              return (
                <Overlay
                  key={overlay.id}
                  id={overlay.id}
                  onClose={props.onClose}
                >
                  <OverlayComponent
                    overlayID={overlay.id}
                    recordID={overlay.recordID}
                    groupID={overlay.groupID}
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
    onClose: (id: OverlayID) => dispatch(closeOverlay(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverlayContainer);
