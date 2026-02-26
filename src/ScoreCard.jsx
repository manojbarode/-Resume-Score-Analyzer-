import React from "react";
import "./ScoreCard.css";
function ScoreCard({ score, keywords }) {
  return (
    <div className="card">
      <h2>Resume Score: {score}/100</h2>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${score}%` }}></div>
      </div>

      <h3>Extracted Keywords (Mocked)</h3>
      <p>{keywords.join(", ")}</p>
      <h4>This is a mocked analysis.</h4>
    </div>
  );
}

export default ScoreCard;