import React from "react";
import PropTypes from "prop-types";

const Bookmark = ({ bookmark, readTime }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = bookmark;
  return (
    <>
      <div className="bg-gradient-to-tr from-fuchsia-300 via-fuchsia-100 to-fuchsia-300 shadow-lg m-2 rounded-lg">
        <div className="flex">
          <div className="p-2">
            {" "}
            <h1 className="text-2xl">
              {title}{" "}
              <strong className="text-sm text-pink-600">
                {" "}
                {reading_time} Min Read
              </strong>
            </h1>
            <div className="flex justify-between p-4">
              <div className="flex">
                <img
                  src={author_img}
                  alt={author}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-base font-semibold">{author}</h2>
                  <p className="text-sm text-gray-500">{posted_date}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-1">
            <img className="w-56 rounded" src={cover} alt="" />
            <div className="p-1">
              {hashtags.map((hashtag, index) => (
                <span key={index} className="hashtag text-pink-600 text-xs">
                  <strong className="text-purple-700">#</strong>
                  {`${hashtag} `}
                </span>
              ))}
            </div>
            <button
              onClick={() => readTime(reading_time, id)}
              className="bg-white text-sm font-bold rounded bg-gradient-to-r from-purple-700  via-slate-400 to-red-400 mb-3 p-2"
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
  readTime: PropTypes.func.isRequired,
};

export default Bookmark;
