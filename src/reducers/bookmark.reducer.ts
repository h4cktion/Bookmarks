import { action, photoBookmark, stateType, videoBookmark } from "../types";
import { ADD_URL } from "./actionsType";

const bookmarkReducer = (state: stateType, action: action): any => {
  switch (action.type) {
    case ADD_URL:
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };
    default:
      return state;
  }
};

export default bookmarkReducer;
