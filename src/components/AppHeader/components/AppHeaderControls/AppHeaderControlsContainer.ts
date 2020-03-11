import { connect } from "react-redux";
import { AppHeaderControls } from "./AppHeaderControls";
import { IDispatch } from "../../../../redux/types";
import { openEditor } from "../../../../redux/editor/actions";

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onCreateNewFile: () => dispatch(openEditor()),
    onCreateNewFolder: () => undefined
  };
}

export default connect(null, mapDispatchToProps)(AppHeaderControls);
