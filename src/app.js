const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");

const routes = require("./routes");

const app = express();

// middlewares
// !importatnt: the order of the middlewares is important
// use for reading the body of the request
app.use(express.json()); // for parsing application/json
app.use(cors()); // permite que cualquier cliente se conecte a la api
app.use(morgan("dev"));

app.use("/api", routes);

// disk storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
// upload profile picture
const upload = multer({ storage });

app.post("/profile/picture", upload.single("picture"), (req, res) => {
  res.send("Profile picture uploaded");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

module.exports = app;
