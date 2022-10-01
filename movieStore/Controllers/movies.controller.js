const express = require('express');
const moviesSchema = require('../models/moviesSchema');
const Movies = require("../models/moviesSchema");

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        let movies = await Movies.find();
      return  res.status(200).send(movies);
    } catch (error) {
        return res.status(404).send(error.message);
    }
})
router.post("/", async (req, res) => {
    try {
        let moviesData = req.body;
        let movies = await Movies(moviesData);
        movies.save();
        console.log(movies);
        return res.status(201).send(movies);




  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.patch("/:id", async (req, res) => {
    try {
        let moviesData = req.body;
        const { id } = req.params;
        let movies = await Movies(id, moviesData,{new:true});
        movies.save();
        console.log(movies);
        return res.status(201).send(movies);
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

module.exports = router;