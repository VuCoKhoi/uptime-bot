const mongoose = require("mongoose");

require("dotenv").config();

const { DB } = process.env;

// fix deprecation warnings

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

const connectDB = () =>
  mongoose
    .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .catch((err) => console.log("connect failed", err));

module.exports = connectDB;
