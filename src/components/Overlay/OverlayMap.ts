import { OverlayType } from "../../redux/overlays/types";

// Overlays
import DeleteRecordOverlay from "./components/DeleteRecordOverlay/DeleteRecordOverlay";
import RenameRecordOverlay from "./components/RenameRecordOverlay/RenameRecordOverlay";

const OverlayMap = new Map<OverlayType, React.FunctionComponent<any>>();

OverlayMap.set(OverlayType.DELETE_RECORD, DeleteRecordOverlay);
OverlayMap.set(OverlayType.RENAME_RECORD, RenameRecordOverlay);

export default OverlayMap;
