import { Overlay, OverlayID } from "../../redux/overlays/types";

export interface OverlayContainerProps {
  overlays: Overlay[];

  onClose: (id: OverlayID) => void;
}
