import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";
import { AppState, IDispatch } from "../../types";
import * as action from "../actions";
import { NoteEditorStateActions } from "../types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const INITIAL_STATE: Partial<AppState> = {
  editor: { open: true, id: undefined }
};

describe("Editor/Actions", () => {
  let store: MockStoreEnhanced<unknown, IDispatch>;

  beforeEach(() => {
    store = mockStore({ ...INITIAL_STATE });
  });

  afterEach(() => {
    store.clearActions();
  });

  it("close", () => {
    return store.dispatch(action.close()).then(() => {
      const dispatchedActions = store.getActions();
      const expectedAction = {
        type: NoteEditorStateActions.REPLACE_ALL,
        payload: { open: false, id: undefined }
      };

      expect(dispatchedActions[0]).toEqual(expectedAction);
    });
  });

  // it("open", () => {

  // });
});
