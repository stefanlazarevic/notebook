import { connect } from "react-redux";
import { AppHeaderControls } from "./AppHeaderControls";
import { IDispatch } from "../../../../redux/types";
import { openEditor } from "../../../../redux/editor/actions";
import { showOverlay } from "../../../../redux/overlays/actions";
import { OverlayType } from "../../../../redux/overlays/types";

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onCreateNewFile: () => dispatch(openEditor()),
    onCreateNewFolder: () => dispatch(showOverlay(OverlayType.CREATE_GROUP))
  };
}

export default connect(null, mapDispatchToProps)(AppHeaderControls);
