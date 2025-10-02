const express = require("express");
const cors = require("cors");
const db = require("./db"); 

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); 
app.use(express.json()); 

// Fetch quiz questions (no answers)
app.get("/quiz", (req, res) => {
  db.all("SELECT id, text, option1, option2, option3, option4 FROM questions", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Submit answers and calculate score
app.post("/submit", (req, res) => {
  const userAnswers = req.body.answers; // [{id, chosen}]

  db.all("SELECT id, text, option1, option2, option3, option4, correctOption FROM questions", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    let score = 0;
    let details = []; // ✅ declare once outside the loop

    rows.forEach((q) => {
      const ans = userAnswers.find((a) => a.id === q.id);
      const chosenIndex = ans ? ans.chosen : null;
      const isCorrect = chosenIndex === q.correctOption;

      if (isCorrect) score++;

      details.push({
        text: q.text,
        chosen: chosenIndex,
        chosenText: chosenIndex !== null ? q[`option${chosenIndex + 1}`] : "Not Answered",
        correct: q.correctOption,
        correctText: q[`option${q.correctOption + 1}`],
        isCorrect,
      });
    });

    res.json({
      score,
      total: rows.length,
      details, // send detailed breakdown
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
