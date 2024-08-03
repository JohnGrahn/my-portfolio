import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/Resume.md")
      .then((response) => response.text())
      .then((text) => {
        setMarkdownContent(text);
      })
      .catch((error) => {
        console.error("Error fetching markdown file:", error);
      });
  }, []);

  const toggleResume = () => {
    setShowPdf(!showPdf);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="my-8">
        <div className="form-control mb-4">
          <label className="label cursor-pointer">
            <span className="label-text">Show PDF</span>
            <input
              type="checkbox"
              className="toggle"
              checked={showPdf}
              onChange={toggleResume}
            />
          </label>
        </div>
        {showPdf ? (
          <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
            <iframe
              src="/JohnGrahnResume.pdf"
              width="100%"
              height="600px"
              title="Resume PDF"
              className="border border-gray-300 rounded"
            ></iframe>
          </div>
        ) : (
          <div className="prose max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdownContent}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resume;
