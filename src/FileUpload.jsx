import React, { useState } from "react";
import { toast } from "react-toastify";
import "./FileUpload.css";

function FileUpload({ onUpload }) {

  const [fileName, setFileName] = useState("Click to Upload Resume");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed.");
      setFileName("Click to Upload Resume");
      onUpload(null);
      return;
    }

    toast.success("PDF uploaded successfully!");
    setFileName(file.name);  
    onUpload(file);
  };

  return (
    <div className="upload-wrapper text-center">
      <label className="upload-box">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          hidden
        />
        <div className="upload-content">
          <i className="bi bi-upload fs-2 text-primary"></i>
          <p className="mb-0 fw-semibold">
            {fileName}
          </p>
        </div>
      </label>
    </div>
  );
}

export default FileUpload;