const storeBookmarks = (bookmarks) => {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
};
const getStoredBookmarks = () => {
  const storedBookmarks = localStorage.getItem("bookmarks");
  return storedBookmarks ? JSON.parse(storedBookmarks) : [];
};

const storeReadTime = (time) => {
  localStorage.setItem("readingTime", time);
};

const getStoreReadTime = () => {
  const storedTime = localStorage.getItem("readingTime");
  return storedTime ? JSON.parse(storedTime) : 0;
};

export { storeBookmarks, getStoredBookmarks, storeReadTime, getStoreReadTime };
