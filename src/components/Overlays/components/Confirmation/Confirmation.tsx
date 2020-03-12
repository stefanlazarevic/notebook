import React from "react";

import "./Confirmation.css";

import OverlayHeader from "../OverlayHeader/OverlayHeader";
import OverlayBody from "../OverlayBody/OverlayBody";
import OverlayFooter from "../OverlayFooter/OverlayFooter";
import ConfirmButton from "./components/ConfirmButton/ConfirmButton";
import DenyButton from "./components/DenyButton/DenyButton";

export default function ConfirmationOverlay(props: any) {
  return (
    <div className="ConfirmationOverlay">
      <OverlayHeader title={props.title} onClose={props.onClose} />
      <OverlayBody>
        <p>{props.content}</p>
      </OverlayBody>
      <OverlayFooter>
        <ConfirmButton
          text={props.confirmText}
          color={props.confirmColor}
          onClick={props.onConfirm}
        />
        <DenyButton
          text={props.denyText}
          color={props.denyColor}
          onClick={props.onClose}
        />
      </OverlayFooter>
    </div>
  );
}
