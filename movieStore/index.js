const express = require("express");
const connection = require('./configs/db.js');
const moviesController = require('./Controllers/movies.controller');


const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/movies', moviesController);


app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

const PORT = 8080;
app.listen(PORT, async () => {
    await connection;
  try {
    console.log(`port is running at http://localhost:${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
