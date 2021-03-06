const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/auth");
const app = express();

//db
mongoose
  .connect(process.env.DATABASE_CLOUD)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log(error));
//app middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use("/api", authRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`API IS RUNNING ON PORT ${port}`);
});
