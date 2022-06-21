import { useContext, useState } from "react";
import { DispatchContext } from "../../context";
import { ADD_URL } from "../../reducers/actionsType";

function BookmarkForm() {
  const dispatch = useContext(DispatchContext);
  const [url, setUrl] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setUrl(e.currentTarget.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("url to save", url);
    dispatch({ action: ADD_URL, payload: url });
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
