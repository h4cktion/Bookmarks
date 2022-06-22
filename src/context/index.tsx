import { createContext, useReducer } from "react";
import bookmarkReducer from "../reducers/bookmark.reducer";
import { photoBookmark, stateType, videoBookmark } from "../types";

export const DispatchContext = createContext<any | null>(null);

export const AppContext = createContext<stateType | null>(null);

export const BookmarksProvider = (props: any) => {
  const bookmarks: (photoBookmark | videoBookmark)[] = [];
  const defaultState = {
    bookmarks,
    idBookmarkToShow: null,
  };

  const [state, dispatch] = useReducer(bookmarkReducer, defaultState);

  return (
    <AppContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {/* eslint-disable-next-line react/prop-types */}
        {props.children}
      </DispatchContext.Provider>
    </AppContext.Provider>
  );
};
