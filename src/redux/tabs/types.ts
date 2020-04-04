import { NoteGroupID } from "../notes/groups/types";

export type TabState = {
  currentTabIndex: number;
  records: NoteGroupID[];
};

export const DEFAULT_TAB_STATE = {
  currentTabIndex: 0,
  records: ["~"]
};

export enum TabActions {
  CREATE_TAB = "Tabs/Actions/CREATE_TAB",
  OPEN_TAB = "Tabs/Actions/OPEN_TAB",
  CLOSE_TAB = "Tabs/Actions/CLOSE_TAB",
  REPLACE = "Tabs/Actions/REPLACE"
}
