const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", async (req, res) => {
  db.query("SELECT * FROM a")
    .then((result) => {
      res.json({ result });
    })
    .catch((e) => {
      res.json({ e });
    });
});
router.get("/a", async (req, res) => {
  db.query("SELECT * FROM users")
    .then((result) => {
      res.json({ result });
    })
    .catch((e) => {
      res.json({ e });
    });
});
router.get("/aa", async (req, res) => {
  db.query("SELECT * FROM users")
    .then((result) => {
      res.json({ result });
    })
    .catch((e) => {
      res.json({ e });
    });
});
module.exports = router;
