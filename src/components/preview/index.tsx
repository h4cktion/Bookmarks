import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { getTimeSinceNow } from "../../helpers/dateHelpers";
import { photoBookmark, videoBookmark } from "../../types";

function Preview() {
  const appContext = useContext(AppContext);

  const [bookmark, setBookmark] = useState<
    photoBookmark | videoBookmark | null
  >(null);

  useEffect(() => {
    const bookmarkToShow = appContext?.bookmarks.find(
      (b: photoBookmark | videoBookmark) =>
        b.id === appContext?.idBookmarkToShow
    );
    if (bookmarkToShow) {
      setBookmark(bookmarkToShow);
    }
  }, [appContext?.idBookmarkToShow]);

  return (
    <div>
      <div>
        <h1>Preview</h1>
        {bookmark?.html && (
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: bookmark?.html }}
          ></div>
        )}
      </div>
      <div>
        <h2>Details</h2>
        <ul>
          {bookmark &&
            (Object.keys(bookmark) as (keyof typeof bookmark)[]).map((key) => {
              if (key === "id" || key === "html") return;
              return (
                <li key={key}>{`${key} : ${
                  key === "addedDate"
                    ? getTimeSinceNow(bookmark.addedDate)
                    : bookmark[key]
                }`}</li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default Preview;
