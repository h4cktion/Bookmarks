import { useContext } from "react";
import { AppContext } from "../../context";

function BookmarksList() {
  const appContext = useContext(AppContext);
  console.log("appContext", appContext);
  console.log("bookmarks", appContext?.bookmarks);
  return (
    <div>
      LIST
      {appContext?.bookmarks &&
        appContext?.bookmarks.map((bookmark, idx) => (
          <div key={idx}>{bookmark.author}</div>
        ))}
    </div>
  );
}

export default BookmarksList;
