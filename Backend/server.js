// server.js
const express = require("express");
const cors = require("cors");
const db = require("./db"); // Import database setup

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow frontend to connect
app.use(express.json()); // Parse JSON bodies

// ✅ Route 1: Get all quiz questions (without correct answers)
app.get("/quiz", (req, res) => {
  db.all("SELECT id, text, option1,option2, option3, option4 FROM questions", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.json(rows);
  });
});

// ✅ Route 2: Submit answers and calculate score
app.post("/submit", (req, res) => {
  const userAnswers = req.body; 

  db.all("SELECT id, correctOption FROM questions", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    let score = 0;
    let results = {};

    rows.forEach(q => {
        results[q.id]=q.correctOption
        if(results[q.id]===userAnswers[q.id]){
            score++;
        }
    });

    res.json({
      score,
      total: rows.length,
      results
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
