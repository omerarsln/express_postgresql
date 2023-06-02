const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "postgres",
  user: "postgres",
  password: "Omer66Arslan",
});
pool.connect((err, client, release) => {
  if (err) {
    console.error("Veritabani Baglanti Hatasi", err.stack);
    process.exit();
  } else {
    console.log("Veritabanina Baglanildi");
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
