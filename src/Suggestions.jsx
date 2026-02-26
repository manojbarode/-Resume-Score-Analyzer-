import React from "react";
import "./Suggestions.css";

function Suggestions({ score }) {
  let suggestions = [];

if (score < 30) {
  suggestions = [
    "Add a professional summary at the top.",
    "Include relevant technical skills.",
    "Add internships or project experience.",
    "Improve resume formatting and structure."
  ];

} else if (score < 50) {
  suggestions = [
    "Add more technical skills.",
    "Include measurable achievements.",
    "Mention tools and technologies clearly.",
    "Improve keyword optimization."
  ];

} else if (score < 75) {
  suggestions = [
    "Add certifications to strengthen profile.",
    "Highlight leadership experience.",
    "Use action verbs in bullet points.",
    "Optimize resume for ATS systems."
  ];

} else {
  suggestions = [
    "Excellent resume structure!",
    "Consider adding portfolio or GitHub link.",
    "Keep updating with latest projects.",
    "Tailor resume for specific job roles."
  ];
}

  return (
    <div className="card">
      <h2>Improvement Suggestions</h2>
      <ul>
        {suggestions.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Suggestions;