import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";
import * as action from "../actions";
import { NoteRecord, NotesRecordsActions } from "../types";
import { AppState, IDispatch } from "../../../types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const TEST_RECORD: NoteRecord = {
  id: "test",
  title: "Hello world",
  content: "<h1>Lorem ipsum</h1>"
};

const INITIAL_STATE: Partial<AppState> = {
  notes: { records: { [TEST_RECORD.id]: TEST_RECORD } }
};

describe("Notes/Records/Actions", () => {
  var store: MockStoreEnhanced<unknown, IDispatch>;

  beforeEach(() => {
    store = mockStore({ ...INITIAL_STATE });
  });

  afterEach(() => {
    store.clearActions();
  });

  it("insert", () => {
    const record: NoteRecord = {
      id: "tyero9pkdcl1",
      title: "Test",
      content: "<p>Hello World</p>"
    };

    return store.dispatch(action.insert(record)).then(() => {
      const dispatchedActions = store.getActions();
      const expectedAction = {
        type: NotesRecordsActions.REPLACE_ALL,
        payload: record
      };

      expect(dispatchedActions[0]).toEqual(expectedAction);
    });
  });

  it("insert (missing record)", () => {
    return store
      .dispatch(action.insert((null as unknown) as NoteRecord))
      .catch(error => {
        expect(error.message).toBe(`Record object is absent.`);
      });
  });

  it("insert (missing or duplicate id)", () => {
    const record = TEST_RECORD;

    return store.dispatch(action.insert(record)).catch(error => {
      expect(error.message).toBe(
        `Record with the ID ${record.id} already exists.`
      );
    });
  });
});
