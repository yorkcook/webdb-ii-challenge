const express = require("express");

const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "Coming to you live from the API!" });
});

router.get("/cars", (req, res) => {
  db("cars")
    .then(cars => {
      res.status(200).json(cars);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "No, no, no you don't get to see dem cars" });
    });
});

router.post("/", (req, res) => {
  const car = req.body;
  db("cars")
    .insert(car, "id")
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res
        .status(500)
        .json({ message: "Nobody wants that kind of stinking car." });
    });
});

router.put("/cars/:id", (req, res) => {
  const update = req.body;
  db("cars")
    .where("id", "=", req.params.id)
    .update(update)
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({ message: "You done got smurfed!" });
    });
});

router.delete("/cars/:id", (req, res) => {
  db("cars")
    .where("id", "=", req.params.id)
    .del()
    .then(car => {
      if (car > 0) {
        res.status(200).json(car);
      } else {
        res
          .status(404)
          .json({ message: "There ain't no one here with that id!" });
      }
    })
    .catch(error => {
      res.status(500).json({ error: "You done got smurfed!" });
    });
});

module.exports = router;
