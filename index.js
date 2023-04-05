const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./Data/Category.json");
const news = require("./Data/News.json");

app.get("/", (req, res) => {
  res.send("Mr.X News");
});
app.get("/mrx-categories", (req, res) => {
  res.send(categories);
});
app.get("/mrx-news", (req, res) => {
  res.send(news);
});

app.listen(port, () => {
  console.log(`example app listening ,`, port);
});
