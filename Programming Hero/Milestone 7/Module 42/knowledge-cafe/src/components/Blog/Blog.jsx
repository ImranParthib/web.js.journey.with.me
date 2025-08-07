import React from "react";
import { FaBookmark } from "react-icons/fa6";
import PropTypes from "prop-types";

const Blog = ({ blog, addBookmark, readTime }) => {
  const {
    id,
    cover,
    title,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="bg-gradient-to-tr from-fuchsia-300 via-fuchsia-100 to-fuchsia-300 rounded-lg shadow-md max-w-2xl mx-auto overflow-hidden flex flex-col">
      <img src={cover} alt="Blog Cover" className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
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
          <div className="flex items-center text-gray-500">
            <span className="text-sm mr-2">{reading_time} min read</span>
            <button
              onClick={() => addBookmark(blog)}
              className="w-4 h-4 text-purple-700"
            >
              <FaBookmark />
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-4">{title}</h1>
        <div className="flex flex-wrap mb-4">
          {hashtags.map((hashtag, index) => (
            <span key={index} className="text-sm text-gray-600 mr-2">
              #{hashtag}
            </span>
          ))}
        </div>

        <div className="mt-auto max-w-fit p-0.5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-sm">
          <div className="relative p-1 text-purple-600 cursor-pointer max-w-fit bg-white rounded-sm">
            <button
              onClick={() => readTime(reading_time, id)}
              className="bg-white p-1 text-sm font-bold"
            >
              Mark as read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  addBookmark: PropTypes.func.isRequired,
  readTime: PropTypes.func.isRequired,
};

export default Blog;
