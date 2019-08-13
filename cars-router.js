const express = require("express");

const knex = require("knex");

const knexConfig = require("./knexfile.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Coming to you live from the API!" });
});

router.get("/", (req, res) => {});

router.post("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;
