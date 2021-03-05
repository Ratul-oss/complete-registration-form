const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/registrationData", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  })
  .then(() => console.log(`Connected to the database :)`))
  .catch((err) => {
    console.log(err);
  });
