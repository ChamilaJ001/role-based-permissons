import { Router } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/save-roles", (req, res) => {
  const rolesData = req.body;
  console.log(rolesData);

  const filePath = path.join(__dirname, "../data/role-permissions.json");
  const jsonData = JSON.stringify(rolesData, null, 2);

  fs.writeFile(filePath, jsonData, "utf8", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      res.status(500).send("Error saving roles data");
      return;
    }

    res.send("Roles saved successfully");
  });
});

export default router;
