const mongoose = require("mongoose");

const moviesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  release_year: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    },
    cast: {
        type: [String],
        required: true
    }
}, {
    versionKey: false,
    timestamps:true
});

module.exports = mongoose.model("movies", moviesSchema);
