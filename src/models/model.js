const mongoose = require("mongoose");
const validator = require("validator");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Your email is invalid");
      }
    },
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
});

const DataCol = new mongoose.model("Registration-Data", dataSchema);

module.exports = DataCol;
