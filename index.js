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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server open in PORT:${PORT}`);
});
