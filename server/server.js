require("dotenv").config();
const express = require("express");
const { env } = require("process");
const app = express();
const PORT = env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
/**
 * Json parse is important
 */

app.use(express.json());

// mongos conn
const mongoConn = async () => {
  try {
    await mongoose.connect(process.env.MONGODB || process.env.MONGO_URL);
    console.log("DataBase now is connected.");
  } catch (error) {
    console.log(error.message);
  }
};

// call the connection
mongoConn();

// routes || API
const emRouters = require("./routes/emRouters");
app.use("/api/employees", emRouters);

app.listen(PORT, () => {
  console.log("server is running on PPORT: " + PORT);
});
