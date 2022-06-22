import { action, stateType } from "../types";
import { ADD_URL, DELETE_BOOKMARK } from "./actionsType";

const bookmarkReducer = (state: stateType, action: action): any => {
  const { type, payload } = action;

  switch (type) {
    case ADD_URL:
      return { ...state, bookmarks: [...state.bookmarks, payload] };
    case DELETE_BOOKMARK: {
      const updatedBookmarks = state.bookmarks.filter(
        (bookmark) => bookmark.id !== payload
      );
      return { ...state, bookmarks: updatedBookmarks };
    }
    default:
      return state;
  }
};

export default bookmarkReducer;
