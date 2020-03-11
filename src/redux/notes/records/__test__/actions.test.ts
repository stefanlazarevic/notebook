import configureStore, { MockStoreEnhanced } from "redux-mock-store";
import thunk from "redux-thunk";
import * as action from "../actions";
import { NoteRecord, NotesRecordsActions } from "../types";
import { AppState, IDispatch } from "../../../types";
import { NotesState } from "../../types";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const TEST_RECORD: NoteRecord = {
  id: "test",
  parent: "root",
  title: "Hello world",
  content: { entityMap: {}, blocks: [] }
};

const INITIAL_STATE: Partial<AppState> = {
  notes: { records: { [TEST_RECORD.id]: TEST_RECORD } } as NotesState
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
      parent: "root",
      title: "Test",
      content: { entityMap: {}, blocks: [] }
    };

    return store.dispatch(action.insertRecord(record)).then(() => {
      const dispatchedActions = store.getActions();
      const expectedAction = {
        type: NotesRecordsActions.REPLACE_ALL,
        payload: {
          ...(INITIAL_STATE.notes as NotesState).records,
          [record.id]: record
        }
      };

      expect(dispatchedActions[0]).toEqual(expectedAction);
    });
  });

  it("insert (missing record)", () => {
    return store
      .dispatch(action.insertRecord((null as unknown) as NoteRecord))
      .catch(error => {
        expect(error.message).toBe(`NoteRecord object is absent.`);
      });
  });

  it("insert (missing or duplicate id)", () => {
    const record: NoteRecord = TEST_RECORD;

    return store.dispatch(action.insertRecord(record)).catch((error: Error) => {
      expect(error.message).toBe(
        `NoteRecord with the ID ${record.id} already exists.`
      );
    });
  });

  it("update", () => {
    const record: NoteRecord = {
      ...TEST_RECORD,
      title: "New title",
      content: { entityMap: {}, blocks: [] }
    };

    return store.dispatch(action.updateRecord(record)).then(() => {
      const dispatchedActions = store.getActions();
      const expectedAction = {
        type: NotesRecordsActions.REPLACE,
        payload: record
      };

      expect(dispatchedActions[0]).toEqual(expectedAction);
    });
  });

  it("update (missing record)", () => {
    return store
      .dispatch(action.updateRecord((null as unknown) as NoteRecord))
      .catch((error: Error) => {
        expect(error.message).toBe(`NoteRecord must contain valid ID.`);
      });
  });

  it("update (missing record)", () => {
    const record: NoteRecord = { ...TEST_RECORD, id: "y44ueqoo2px1k" };

    return store.dispatch(action.updateRecord(record)).catch((error: Error) => {
      expect(error.message).toBe(`NoteRecord with ID ${record.id} is absent.`);
    });
  });

  it("remove", () => {
    const ID = "test";

    return store.dispatch(action.removeRecord(ID)).then(() => {
      const dispatchedActions = store.getActions();
      const expectedAction = {
        type: NotesRecordsActions.REPLACE_ALL,
        payload: {}
      };

      expect(dispatchedActions[0]).toEqual(expectedAction);
    });
  });

  it("detele (missing or invalid ID)", () => {
    const ID = "ovbuan123le";

    return store.dispatch(action.removeRecord(ID)).catch((error: Error) => {
      expect(error.message).toBe(`NoteRecord with the ID ${ID} is absent.`);
    });
  });
});
