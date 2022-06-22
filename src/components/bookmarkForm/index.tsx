import { useContext, useState } from "react";
import { DispatchContext } from "../../context";
import { ADD_URL } from "../../reducers/actionsType";
import { fetchPhotoAndVideoInfo } from "../../services/noembedServices";
import "./bookMarkFom.css";

function BookmarkForm() {
  const dispatch = useContext(DispatchContext);
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setUrl(e.currentTarget.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (url === "" || !url.includes("http")) {
      setError("Veuillez saisir une url valide.");
    } else {
      setError("");
      const newbookmark = await fetchPhotoAndVideoInfo(url);
      if (!newbookmark) return;
      dispatch({ type: ADD_URL, payload: newbookmark });
      setUrl("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="addBookmark">
      <input
        type="text"
        value={url}
        onChange={handleChange}
        placeholder="https://vimeo.com/565486457"
      />
      {error && <span className="error">{error}</span>}
      <input type="submit" value="AJOUTER" />
    </form>
  );
}

export default BookmarkForm;
