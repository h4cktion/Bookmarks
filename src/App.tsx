import "./App.css";
import BookmarkForm from "./components/bookmarkForm";
import BookmarksList from "./components/bookmarksList";
import Preview from "./components/preview";
import { BookmarksProvider } from "./context";

function App() {
  return (
    <BookmarksProvider>
      <div className="App">
        <div className="formAndList">
          <BookmarksList />
          <BookmarkForm />
        </div>
        <div className="preview">
          <Preview />
        </div>
      </div>
    </BookmarksProvider>
  );
}

export default App;
