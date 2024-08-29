const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const dataRoutes = require("./routes/dataRoutes");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(express.json());

app.use("/api", dataRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
