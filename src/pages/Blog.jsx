import React, { useState } from "react";
import BlogPost from "../components/BlogPost";

const Blog = () => {
  const posts = [
    { title: "Post 1", file: "posts/post1.md", image: "images/post1.jpg" },
    { title: "AZ-305 Azure Solutions Architect Expert", file: "posts/AZ-305.md", image: "images/microsoft-certified-expert-badge.svg" },
    { title: "AZ-104 Associate Azure Administrator Exam", file: "posts/AZ-104.md", image: "images/microsoft-certified-associate-badge.svg" },
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {selectedPost ? (
        <div className="flex flex-col items-center">
          <button className="btn btn-primary mb-4" onClick={handleBackClick}>
            Back to Blog Posts
          </button>
          <div className="w-full max-w-3xl">
            <h2 className="text-center">{selectedPost.title}</h2>
            <BlogPost markdownFile={selectedPost.file} image={selectedPost.image} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <div
              key={index}
              className="card bg-base-100 shadow-xl cursor-pointer"
              onClick={() => handlePostClick(post)}
            >
              <figure className="relative pt-[56.25%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 300 300"
                  className="absolute top-0 left-0 w-full h-full"
                >
                  <image href={post.image} width="100%" height="100%" />
                </svg>
              </figure>
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
