import { combineReducers } from "redux";
import notesReducers from "./notes/reducers";
import editorReducer from "./editor/reducer";
import settingsReducers from "./settings/reducers";
import overlaysReducer from "./overlays/reducer";
import printReducer from "./print/reducer";
import tabReducer from "./tabs/reducer";
import favoriteReducer from "./favorites/reducer";
import DriveReducer from "./drive/DriveReducer";

export default combineReducers({
  notes: notesReducers,
  tabs: tabReducer,
  favorites: favoriteReducer,
  editor: editorReducer,
  settings: settingsReducers,
  overlays: overlaysReducer,
  print: printReducer,
  drive: DriveReducer
});
