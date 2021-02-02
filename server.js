require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const userRouter = require("./routes/user");
const connectDB = require("./db");

const port = process.env.PORT || 3000;

// Connect to database
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// Connect router
app.use(userRouter);

app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
