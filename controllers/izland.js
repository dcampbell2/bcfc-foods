const express = require("express");
const { restart } = require("nodemon");
const router = express.Router();
const IzlandFood = require("../models/izland");

router.get("/", (req, res) => {
  IzlandFood.find()
    .then((food) => {
      res.json(food);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).end();
    });
});

router.delete("/:id", (req, res) => {
  IzlandFood.findByIdAndDelete(req.params.id).then((result) => {
    res.json(result);
  });
});

module.exports = router