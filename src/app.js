const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const { clear } = require("console");
require("./db/connection");
const path = require("path");

clear();

const staticFolderPath = path.join(__dirname, "../public");
const pageFolderPath = path.join(__dirname, "../public/pages");

app.use(express.static(staticFolderPath));
app.set("view engine", "hbs");
app.set("views", pageFolderPath);

app.get("/", (req, res) => {
  res.render("index");
});
app.listen(port, () => {
  console.log(`Server is listening to port number ${port}`);
});
