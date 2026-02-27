import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "./App.css";

// Configure worker to use standard CDN
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function App() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-container">
      <Document
        file="/Richa%20Textile%20Business%20Profile.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-document"
        loading={<div className="loading-text">Loading PDF Document...</div>}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={`page_${index + 1}`} className="page-wrapper">
            <Page
              pageNumber={index + 1}
              width={Math.min(
                pageWidth * 0.95,
                1000,
              )} /* Responsive width scaling max to 1000px */
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
            <div className="page-number">
              {index + 1} / {numPages}
            </div>
          </div>
        ))}
      </Document>
    </div>
  );
}

export default App;
