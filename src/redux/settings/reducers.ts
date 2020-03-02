import { combineReducers } from "redux";
import editorSettingsReducer from "./editor/reducer";

export default combineReducers({
  editor: editorSettingsReducer
});
