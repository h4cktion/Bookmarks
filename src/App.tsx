import "./App.css";
import BookmarkForm from "./components/bookmarkForm";
import BookmarksList from "./components/bookmarksList";
import { BookmarksProvider } from "./context";

function App() {
  return (
    <BookmarksProvider>
      <BookmarkForm />
      <BookmarksList />
    </BookmarksProvider>
  );
}

export default App;
