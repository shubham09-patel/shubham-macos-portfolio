import { useState } from "react";
import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import { Download } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// Updated PDF path to resume.pdf
const PDF_URL = `${import.meta.env.BASE_URL}files/resume.pdf`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);

  return (
    <div className="flex flex-col h-[80vh] w-[45vw] bg-white rounded-xl overflow-hidden">
      {/* Header */}
      <div id="window-header" className="flex items-center gap-3">
        <WindowControls target="resume" />
        <h2 className="flex-1 text-center">Shubham_Patel_Resume.pdf</h2>
        <a href={PDF_URL} download="Shubham_Patel_Resume.pdf" title="Download resume">
          <Download className="icon" />
        </a>
      </div>

      {/* Scrollable PDF area */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <Document
          file={PDF_URL}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from(new Array(numPages), (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
              className="mb-6 flex justify-center"
              renderTextLayer
              renderAnnotationLayer
            />
          ))}
        </Document>
      </div>
    </div>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow;