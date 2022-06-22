import { action, stateType } from "../types";
import { ADD_URL } from "./actionsType";

const bookmarkReducer = (state: stateType, action: action): any => {
  const { type, payload } = action;

  switch (type) {
    case ADD_URL:
      return { ...state, bookmarks: [...state.bookmarks, payload] };
    default:
      return state;
  }
};

export default bookmarkReducer;
