import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import remarkSlug from "remark-slug";
import remarkToc from "remark-toc";

const CodeBlock = ({ className, children }) => {
  const language = className?.replace("language-", "");
  return (
    <div className="not-prose">
      <SyntaxHighlighter language={language} style={atomDark}>
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

const BlogPost = ({ markdownFile, image }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/${markdownFile}`)
      .then((response) => response.text())
      .then((text) => {
        setContent(text);
      })
      .catch((error) => {
        console.error("Error fetching markdown file:", error);
      });
  }, [markdownFile]);

  return (
    <div className="flex justify-center">
      <div className="prose max-w-none">
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
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogPost;
