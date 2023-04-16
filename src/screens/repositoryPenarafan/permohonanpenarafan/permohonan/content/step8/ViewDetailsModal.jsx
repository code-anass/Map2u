import React, { useState } from "react";
import { Button, Modal } from "antd";
import "./viewdetails.scss";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const ViewDetailsModal = ({ viewDetails, setViewDetails, file, ext }) => {
  const [numPages, setNumPages] = useState(null);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <Modal
        title="Details"
        style={{ top: 20 }}
        className="view-details-modal"
        open={viewDetails}
        onOk={() => setViewDetails(false)}
        onCancel={() => setViewDetails(false)}
      >
        {["png", "jpeg"].includes(ext) ? (
          <img src={URL.createObjectURL(file)} alt="" />
        ) : ext == "pdf" ? (
          <div className="docx">
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  width={390}
                />
              ))}
            </Document>
          </div>
        ) : (
          <p>doc</p>
        )}
      </Modal>
    </>
  );
};

export default ViewDetailsModal;
