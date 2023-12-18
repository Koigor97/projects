const express = require("express");
const morgan = require("morgan");
const userRouter = require("./routes/user.route");
const authRouter = require("./routes/auth.route");

const app = express();
app.use(express.json());

// using the third party middleware - morgan
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

module.exports = app;
