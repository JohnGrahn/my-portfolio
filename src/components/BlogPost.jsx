import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeBlock = ({ className, children }) => {
  const language = className?.replace("language-", "");
  return (
    <SyntaxHighlighter language={language} style={atomDark}>
      {children}
    </SyntaxHighlighter>
  );
};

const BlogPost = ({ markdownFile }) => {
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
    <ReactMarkdown
      components={{
        code: CodeBlock,
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default BlogPost;
