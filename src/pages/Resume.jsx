import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [showPdf, setShowPdf] = useState(false);
  const [markdownContent, setMarkdownContent] = useState("");
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(null);

  useEffect(() => {
    fetch("/Resume.md")
      .then((response) => response.text())
      .then((text) => {
        setMarkdownContent(text);
      })
      .catch((error) => {
        console.error("Error fetching markdown file:", error);
      });

    import("react-pdf/dist/esm/Page/AnnotationLayer.css");

    const updatePageWidth = () => {
      const container = document.getElementById('pdf-container');
      if (container) {
        setPageWidth(container.offsetWidth);
      }
    };

    updatePageWidth();
    window.addEventListener('resize', updatePageWidth);

    return () => window.removeEventListener('resize', updatePageWidth);
  }, []);

  const toggleResume = () => {
    setShowPdf(!showPdf);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
          <div id="pdf-container" className="w-full max-w-3xl mx-auto">
            <Document
              file="/JohnGrahnResume.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {Array.from(new Array(numPages), (el, index) => (
                <Page 
                  key={`page_${index + 1}`} 
                  pageNumber={index + 1} 
                  width={pageWidth}
                />
              ))}
            </Document>
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
