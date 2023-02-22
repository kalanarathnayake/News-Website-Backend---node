const mongoose = require("mongoose");
const { Schema } = mongoose; // destructuring

const newsSchema = new Schema({
  title: String,
  body: String,
  author: String,
  imageUrl: String,
  source: String,
  category: String,
  location: String,
  date: { type: Date, default: Date.now },
});

module.exports = News = mongoose.model("News", newsSchema);
