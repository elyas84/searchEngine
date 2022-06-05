const mongoose = require("mongoose");
const emloyeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    max: 30,
  },

  job_Id: {
    type: String,
    required: true,
    min: 10,
    max: 100,
  },
  exp: {
    type: String,
    required: true,
    min: 0,
    max: 30,
  },
  salary: {
    type: Number,
    required: true,
    min: 0,
    max: 100000,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Employee", emloyeeSchema);
