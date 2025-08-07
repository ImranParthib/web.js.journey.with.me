import React from "react";
import Blogs from "../Blogs/Blogs";
import Bookmarks from "../Bookmarks/Bookmarks";
import PropTypes from "prop-types";

const Main = ({ addBookmark, bookmarks, readTime, readingTime }) => {
  return (
    <div className="grid grid-cols-3 gap-4 my-4 rounded-lg p-4 max-w-screen-2xl m-auto mt-5 ">
      <div className="col-span-2">
        <Blogs addBookmark={addBookmark} readTime={readTime} />
      </div>
      <div className="col-span-1">
        <Bookmarks
          bookmarks={bookmarks}
          readingTime={readingTime}
          readTime={readTime}
        />
      </div>
    </div>
  );
};
Main.propTypes = {
  addBookmark: PropTypes.func.isRequired,
  bookmarks: PropTypes.array.isRequired,
  readTime: PropTypes.func.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Main;
