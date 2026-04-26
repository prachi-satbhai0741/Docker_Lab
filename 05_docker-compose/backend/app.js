const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.json({ message: 'Hello from Backend!', time: result.rows[0].now });
});

app.listen(process.env.PORT || 4000, () => {
  console.log(`Backend running on port ${process.env.PORT || 4000}`);
});
