import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/main";
import {
  storeBookmarks,
  getStoredBookmarks,
  storeReadTime,
  getStoreReadTime,
} from "./utilities/localStorage";

function App() {
  const [bookmarks, setBookmarks] = useState(getStoredBookmarks());
  const [readingTime, setReadingTime] = useState(getStoreReadTime);

  useEffect(() => {
    storeBookmarks(bookmarks);
    storeReadTime(readingTime);
  }, [bookmarks, readingTime]);

  const addBookmark = (blog) => {
    setBookmarks([...bookmarks, blog]);
  };

  const readTime = (time, id) => {
    setReadingTime(readingTime + time);
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <div >
      <Header  />
      <Main
        addBookmark={addBookmark}
        bookmarks={bookmarks}
        readTime={readTime}
        readingTime={readingTime}
      />
      <Footer />
    </div>
  );
}

export default App;
