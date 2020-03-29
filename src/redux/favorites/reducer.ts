import { FavoriteActions, FavoritesState } from "./types";

export default function favoriteReducer(
  state: FavoritesState = [],
  action: any
) {
  switch (action.type) {
    case FavoriteActions.ADD:
      return state.concat(action.payload.id);
    case FavoriteActions.REMOVE:
      return state.filter(id => id !== action.payload.id);
    default:
      return state;
  }
}
