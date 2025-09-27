// db.js
const sqlite3 = require("sqlite3").verbose();

// Use persistent database file instead of in-memory
const db = new sqlite3.Database("quiz.db");

// Create table + insert sample data only if empty
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT,
      option1 TEXT,
        option2 TEXT,
        option3 TEXT,
        option4 TEXT,
      correctOption INTEGER
    )
  `);

 db.get("SELECT COUNT(*) as count FROM questions", (err, row) => {
  if (err) throw err; // handle error
  if (row.count === 0) {
    const stmt = db.prepare(
      "INSERT INTO questions (text, option1, option2, option3, option4, correctOption) VALUES (?, ?, ?, ?, ?, ?)"
    );

    stmt.run(
      "What is 2 + 2?",
      "2",
      "3",
      "4",
      "5",
      2 // correctOption index (0-based or 1-based, depending on your logic)
    );

    stmt.run(
      "Capital of France?",
      "Berlin",
      "London",
      "Paris",
      "Rome",
      2
    );

    stmt.run(
      "Which one is a JavaScript framework?",
      "React",
      "Python",
      "C++",
      "Java",
      0
    );

    stmt.finalize();
  }
});

});

module.exports = db;
