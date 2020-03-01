import { connect } from "react-redux";
import { AppHeaderControls } from "./AppHeaderControls";
import { IDispatch } from "../../../../redux/types";
import { open } from "../../../../redux/editor/actions";

function mapDispatchToProps(dispatch: IDispatch) {
  return {
    openNoteEditor: () => dispatch(open())
  };
}

export default connect(null, mapDispatchToProps)(AppHeaderControls);
