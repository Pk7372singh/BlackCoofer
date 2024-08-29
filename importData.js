require("dotenv").config(); 

const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const Data = require("./models/Data"); 

const MONGO_URI = process.env.MONGO_URI; 

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected...");

    const filePath = path.join(__dirname, "jsondata.json");
    const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

    Data.insertMany(jsonData)
      .then(() => {
        console.log("Data imported successfully");
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error("Error importing data:", err);
        mongoose.connection.close();
      });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));
