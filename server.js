
---

# 📁 2) backend/server.js

```js
const express = require("express");
const mariadb = require("mariadb");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../frontend")));

const pool = mariadb.createPool({
  host: "YOUR_RDS_ENDPOINT",
  user: "admin",
  password: "YOUR_DB_PASSWORD",
  database: "streambox"
});

app.get("/movies", async (req, res) => {
  const conn = await pool.getConnection();
  const rows = await conn.query("SELECT * FROM movies");
  conn.release();
  res.json(rows);
});

app.listen(80, () => console.log("Netflix Clone running"));
