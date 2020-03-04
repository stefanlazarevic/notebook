import { connect } from "react-redux";
import { AppHeaderControls } from "./AppHeaderControls";
import { IDispatch } from "../../../../redux/types";
import { open } from "../../../../redux/editor/actions";

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    onCreateNewFile: () => dispatch(open()),
    onCreateNewFolder: () => undefined
  };
}

export default connect(null, mapDispatchToProps)(AppHeaderControls);
