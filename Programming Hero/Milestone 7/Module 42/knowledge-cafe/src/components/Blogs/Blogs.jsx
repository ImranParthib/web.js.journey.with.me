import React from "react";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({ addBookmark, readTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      <div className=" shadow-lg p-4 rounded-lg">
        <h1 className="text-3xl font-bold mb-2 ">
          Blogs:{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            {blogs.length}
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Blog
              key={blog.id}
              blog={blog}
              addBookmark={addBookmark}
              readTime={readTime}
            />
          ))}
        </div>
      </div>
    </>
  );
};

Blogs.propTypes = {
  addBookmark: PropTypes.func.isRequired,
  readTime: PropTypes.func.isRequired,
};

export default Blogs;
