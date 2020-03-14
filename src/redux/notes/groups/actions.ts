import { NotesGroupsActions } from "../groups/types";
import { IDispatch, AppState } from "../../types";
import utils from "../../../utils";

export function swapGroupChildren(sourceIndex: number, targetIndex: number) {
  return async (dispatch: IDispatch, getState: () => AppState) => {
    const { notes } = getState();
    const { currentGroupID, groups } = notes;

    const group = groups[currentGroupID];

    dispatch({
      type: NotesGroupsActions.REPLACE,
      payload: {
        ...group,
        children: utils.array.swap(sourceIndex, targetIndex, group.children)
      }
    });
  };
}
