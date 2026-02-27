import React from "react";
import "./App.css";

function App() {
  return (
    <div className="iframe-container">
      {/* Overlays to hide watermarks of the third-party iframe */}
      <div className="watermark-overlay-left"></div>
      <div className="watermark-overlay-right"></div>

      <iframe
        src="https://www.flipbookpdf.net/web/site/9f612c31d932a94682228806c7549ba2c87e6929202602.pdf.html"
        title="Corporate Brochure"
        allowFullScreen
        className="flipbook-iframe"
      ></iframe>
    </div>
  );
}

export default App;
