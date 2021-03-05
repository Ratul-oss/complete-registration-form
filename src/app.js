const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const { clear } = require("console");
require("./db/connection");
const path = require("path");
const hbs = require("hbs");
const DataCol = require("./models/model");

clear();

const staticFolderPath = path.join(__dirname, "../public");
const pageFolderPath = path.join(__dirname, "../public/pages");
const partialFolderPath = path.join(__dirname, "../public/partials");

app.use(express.static(staticFolderPath));
hbs.registerPartials(partialFolderPath);
app.set("view engine", "hbs");
app.set("views", pageFolderPath);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Welcome to DevR",
    desc:
      "Build you dream website. With you own choices and preferences. Which will be responsive and pixel perfect.",
    link: "https://devr.netlify.app/about",
    linkText: "About",
  });
});
app.get("/getstarted", (req, res) => {
  res.render("register", {
    title: "Get Started",
    desc:
      "To Get Started, send me some of your correct information using the form below. I will reply you as soon as possible.",
    link: "https://devr.netlify.app/contact",
    linkText: "Contact",
  });
});
app.post("/register", async (req, res) => {
  try {
    const userName = req.body.userName;
    const userEmail = req.body.userEmail;
    const userAge = req.body.userAge;
    const userMessage = req.body.userMessage;

    const registerData = new DataCol({
      name: userName,
      email: userEmail,
      age: userAge,
      message: userMessage,
    });
    await registerData.save();
    res.render("success");
  } catch (err) {
    res.status(400).send(err);
  }
});
app.listen(port, () => {
  console.log(`Server is listening to port number ${port}`);
});
