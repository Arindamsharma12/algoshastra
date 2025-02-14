import React from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import samplePdf from './sample.pdf';

// Set the worker source explicitly
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Test() {
  return (
    <div>
      <Document
        file={samplePdf}
        onLoadSuccess={() => console.log('PDF loaded successfully')}
        onLoadError={(error) => console.error('Error while loading PDF:', error)}
      >
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
