import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context";
import { photoBookmark, videoBookmark } from "../../types";

function Preview() {
  const appContext = useContext(AppContext);

  const [bookmark, setBookmark] = useState<
    photoBookmark | videoBookmark | null
  >(null);

  useEffect(() => {
    const bMToShow = appContext?.bookmarks.find(
      (b: photoBookmark | videoBookmark) =>
        b.id === appContext?.idBookmarkToShow
    );
    if (bMToShow) {
      setBookmark(bMToShow);
    }
  }, [appContext?.idBookmarkToShow]);

  return (
    <div>
      <h1>Preview</h1>
      <div>
        <h2>Details</h2>
        <ul>
          {bookmark &&
            (Object.keys(bookmark) as (keyof typeof bookmark)[]).map((key) => {
              if (key === "id") return;
              return <li key={key}>{`${key} : ${bookmark[key]}`}</li>;
            })}
        </ul>
      </div>
    </div>
  );
}

export default Preview;
