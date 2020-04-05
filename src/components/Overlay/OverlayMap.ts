import { OverlayType } from "../../redux/overlays/types";

// Overlays
import DeleteRecordOverlay from "./components/DeleteRecordOverlay/DeleteRecordOverlay";
import RenameRecordOverlay from "./components/RenameRecordOverlay/RenameRecordOverlay";
import CreateDirectoryOverlay from "./components/CreateDirectoryOverlay/CreateDirectoryOverlay";
import RenameGroupOverlay from "./components/RenameGroupOverlay/RenameGroupOverlay";

const OverlayMap = new Map<OverlayType, React.FunctionComponent<any>>();

OverlayMap.set(OverlayType.DELETE_RECORD, DeleteRecordOverlay);
OverlayMap.set(OverlayType.RENAME_RECORD, RenameRecordOverlay);
OverlayMap.set(OverlayType.CREATE_DIRECTORY, CreateDirectoryOverlay);
OverlayMap.set(OverlayType.RENAME_GROUP, RenameGroupOverlay);

export default OverlayMap;
