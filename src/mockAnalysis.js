export function analyzeResume(file) {
  const keywords = ["REACT", "JAVASCRIPT", "HTML", "CSS"];
  const score = Math.floor(Math.random() * 100);

  return { score, keywords };
}