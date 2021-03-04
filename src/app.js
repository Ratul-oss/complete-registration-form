const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const { clear } = require("console");
require("./db/connection");
const path = require("path");
const hbs = require("hbs");

clear();

const staticFolderPath = path.join(__dirname, "../public");
const pageFolderPath = path.join(__dirname, "../public/pages");
const partialFolderPath = path.join(__dirname, "../public/partials");

app.use(express.static(staticFolderPath));
hbs.registerPartials(partialFolderPath);
app.set("view engine", "hbs");
app.set("views", pageFolderPath);

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log(`Server is listening to port number ${port}`);
});
