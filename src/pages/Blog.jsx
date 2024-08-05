import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const posts = [
    { title: "Building My Portfolio Site", file: "Portfolio/post1.md", image: "images/post1.jpg" },
    { title: "AZ-305 Azure Solutions Architect Expert", file: "posts/AZ-305.md", image: "images/microsoft-certified-expert-badge.svg" },
    { title: "AZ-104 Associate Azure Administrator Exam", file: "posts/AZ-104.md", image: "images/microsoft-certified-associate-badge.svg" },
    // Add more posts as needed
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post, index) => (
          <Link
            key={index}
            to={`/blog/${post.file.replace('posts/', '').replace('.md', '')}`}
            className="card bg-base-100 shadow-xl cursor-pointer"
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
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blog;
