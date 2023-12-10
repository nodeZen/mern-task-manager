require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const { PORT, MONGO_URI } = process.env;

const userRoutes = require("./routes/user-routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRoutes);

app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(PORT, () => {
  mongoose.connect(MONGO_URI).then(() => {
    console.log("Connected to MongoDB Atlas");
  });
});
