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

app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id === "08") {
    res.send(news);
  } else {
    const category_news = news.filter((n) => n.category_id === id);
    res.send(category_news);
  }
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNew = news.find((n) => n._id === id);
  res.send(selectedNew);
});

app.listen(port, () => {
  console.log(`example app listening ,`, port);
});
