import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import router from "./routes/index.js";

config();
const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(router);

app.post("/submit", (req, res) => {
  console.log("Received JSON:", req.body);
  res.json({ status: "success", data: req.body });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server open in PORT:${PORT}`);
});
