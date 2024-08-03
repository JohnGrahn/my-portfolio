import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";

const CodeBlock = ({ className, children }) => {
  const language = className?.replace("language-", "") || "text";
  return (
    <div className="not-prose inline-block">
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        customStyle={{
          padding: "1em",
          borderRadius: "0.5em",
          display: "inline-block",
          minWidth: "100%",
        }}
        wrapLines={true}
        wrapLongLines={true}
        PreTag={({ children, ...props }) => (
          <pre className="not-prose" {...props}>{children}</pre>
        )}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

const BlogPost = () => {
  const { postId } = useParams();
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(`/posts/${postId}.md`)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
        const imageMatch = text.match(/image:\s*(.+)/);
        if (imageMatch) {
          setImage(imageMatch[1]);
        }
      })
      .catch((error) => {
        console.error("Error fetching markdown file:", error);
      });
  }, [postId]);

  return (
    <div className="flex flex-col items-center w-full px-4 sm:px-6 lg:px-8">
      <Link to="/blog" className="btn btn-primary mb-4">
        Back to Blog Posts
      </Link>
      <div className="w-full max-w-3xl">
        {image && (
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              className="w-48 h-48 mb-4"
            >
              <image href={image} width="100%" height="100%" />
            </svg>
          </div>
        )}
        <ReactMarkdown
          remarkPlugins={[remarkSlug, remarkToc, remarkGfm]}
          components={{
            code: CodeBlock,
          }}
          className="prose max-w-none"
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
