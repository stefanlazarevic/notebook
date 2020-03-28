import { IDispatch, AppState } from "../types";
import { TabActions } from "./types";
import { NoteGroupID } from "../notes/groups/types";
import utils from "../../utils";

export function createNewTab(id: NoteGroupID = "root") {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { tabs } = getState();

    const records = tabs.records.concat(id);

    dispatch({
      type: TabActions.CREATE_TAB,
      payload: {
        currentTabIndex: records.length - 1,
        records,
        id
      }
    });
  };
}

export function openTab(index: number) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { tabs } = getState();

    if (index < 0 || index >= tabs.records.length) {
      throw Error(`Tab at index ${index} is absent.`);
    }

    dispatch({
      type: TabActions.OPEN_TAB,
      payload: {
        currentTabIndex: index,
        id: tabs.records[index]
      }
    });
  };
}

export function closeTab(index: number) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { tabs } = getState();

    if (tabs.records.length < 2) {
      throw Error("Cannot close last tab.");
    }

    if (index < 0 || index >= tabs.records.length) {
      throw Error(`Tab at index ${index} is absent.`);
    }

    let currentTabIndex = tabs.currentTabIndex;

    if (currentTabIndex > index) {
      currentTabIndex -= 1;
    } else if (currentTabIndex === index) {
      currentTabIndex = index - 1;

      if (currentTabIndex < 0) {
        currentTabIndex = 0;
      }
    }

    const records = utils.array.removeAtIndex(index, tabs.records);
    const id = records[currentTabIndex];

    dispatch({
      type: TabActions.CLOSE_TAB,
      payload: {
        currentTabIndex,
        records,
        id
      }
    });
  };
}

export function closeOtherTabs(index: number) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { tabs } = getState();

    if (tabs.records.length < 2) {
      throw Error("Cannot close last tab.");
    }

    if (index < 0 || index >= tabs.records.length) {
      throw Error(`Tab at index ${index} is absent.`);
    }

    const records = [tabs.records[index]];

    dispatch({
      type: TabActions.REPLACE,
      payload: {
        currentTabIndex: 0,
        records,
        id: records[0]
      }
    });
  };
}

export function closeTabsAfter(index: number) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { tabs } = getState();

    if (tabs.records.length < 2) {
      throw Error("Cannot close last tab.");
    }

    if (index < 0 || index >= tabs.records.length) {
      throw Error(`Tab at index ${index} is absent.`);
    }

    const records = tabs.records.slice(0, index + 1);

    let currentTabIndex = tabs.currentTabIndex;

    if (currentTabIndex > index) {
      currentTabIndex = index;
    }

    const id = records[currentTabIndex];

    dispatch({
      type: TabActions.REPLACE,
      payload: {
        currentTabIndex,
        records,
        id
      }
    });
  };
}
