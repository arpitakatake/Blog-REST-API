
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Blog REST API!"
  });
});

app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Blog REST API running at http://localhost:${PORT}`);
});
