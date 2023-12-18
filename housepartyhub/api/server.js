const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

// accessing the .env file
dotenv.config({ path: "./config.env" });
// getting the port number from the env file
const port = process.env.PORT || 3000;
// retrieving the database link and replacing the password
const DB = process.env.MONGO_DB.replace(
  "<PASSWORD>",
  process.env.MONGO_DB_PASSWD
);
// connecting to the database using mongoose
mongoose
  .connect(DB)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port:${port}...`);
});
