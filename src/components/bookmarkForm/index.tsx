import { useContext, useState } from "react";
import { DispatchContext } from "../../context";
import { ADD_URL } from "../../reducers/actionsType";
import { fetchPhotoAndVideoInfo } from "../../services/noembedServices";

function BookmarkForm() {
  const dispatch = useContext(DispatchContext);
  const [url, setUrl] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setUrl(e.currentTarget.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const newbookmark = await fetchPhotoAndVideoInfo(url);
    if (!newbookmark) return;
    dispatch({ type: ADD_URL, payload: newbookmark });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        {`Entrez l'url de la photo ou de la vidéo que vous souhaitez enregistrer :`}
        <input type="text" value={url} onChange={handleChange} />
      </label>
      <input type="submit" value="Enregistrer" />
    </form>
  );
}

export default BookmarkForm;
