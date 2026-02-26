import React, { useState } from "react";
import FileUpload from "./FileUpload";
import Loader from "./Loader";
import ScoreCard from "./ScoreCard";
import Suggestions from "./Suggestions";
import { analyzeResume } from "./mockAnalysis";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [score, setScore] = useState(null);
  const [keywords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(false);


  const handleFileUpload = (file) => {


  if (!file || file.type !== "application/pdf") {
    setScore(null);
    setKeywords([]);
    setLoading(false);
    return;
  }

  setLoading(true);

  setTimeout(() => {
    const result = analyzeResume(file);
    setScore(result.score);
    setKeywords(result.keywords);
    setLoading(false);
  }, 1000);
};

  return (
    
    <div className="container">
    <ToastContainer position="top-center" autoClose={2000} style={{zIndex:99999}}/>

      <h2>Resume Score Analyzer</h2>
      <FileUpload onUpload={handleFileUpload} />
      {loading && <Loader />}
      {score && <ScoreCard score={score} keywords={keywords} />}
      {score && <Suggestions score={score} />}
     
    </div>
  );
}

export default App;