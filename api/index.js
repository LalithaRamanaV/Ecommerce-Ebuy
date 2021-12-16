const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("DBConnection is succesfull"))
.catch((err) => {
  console.log(err);
});
app.use("/api/user", userRoute);
app.listen (process.env.PORT || 5000, () => {
  console.log("Backend is running")
})
console.log("Srinivasa Govinda")