import React, { useState } from "react";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  const posts = [
    { title: "Post 1", file: "posts/post1.md" },
    { title: "Post 2", file: "posts/post2.md" }
    // Add more posts as needed
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  return (
    <div className="container mx-auto">
      {selectedPost ? (
        <div className="flex flex-col items-center">
          <button className="btn btn-primary mb-4" onClick={handleBackClick}>
            Back to Blog Posts
          </button>
          <h2 className="text-center">{selectedPost.title}</h2>
          <BlogPost markdownFile={selectedPost.file} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>Click to read more</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;