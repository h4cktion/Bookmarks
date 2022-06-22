import { useContext } from "react";
import { AppContext, DispatchContext } from "../../context";
import { DELETE_BOOKMARK } from "../../reducers/actionsType";
import "./bookmarksList.css";

function BookmarksList() {
  const appContext = useContext(AppContext);
  const dispatch = useContext(DispatchContext);

  const deleteBookmark = (e: any): void => {
    dispatch({ type: DELETE_BOOKMARK, payload: e.currentTarget.id });
  };

  return (
    <div className="list">
      <h1>Bookmarks</h1>
      {appContext?.bookmarks &&
        appContext?.bookmarks.map((bookmark) => (
          <div key={bookmark.id} className="bookmark">
            <div className="title">
              {bookmark.title.replace(/(.{15})..+/, "$1...")}
            </div>
            <div className="trashDiv" onClick={deleteBookmark} id={bookmark.id}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="trash"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </div>
          </div>
        ))}
    </div>
  );
}

export default BookmarksList;
