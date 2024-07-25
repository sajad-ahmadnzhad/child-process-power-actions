import { exec } from "child_process";
import express from "express";
import cors from "cors";
import path from "path";
import bodyParser from "body-parser";
import commands from "./commands";
import { execCallback } from "./utils/functions";

const app = express();

app.use(cors());
app.use(bodyParser());

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "views"));

app.use((req, res, next) => {
  const userAgent = req.headers["user-agent"];
  if (userAgent && userAgent.match(/Windows/)) {
    return next();
  }
  res.send("Please use windows os");
});

app.get('/', (req , res) => {
  res.render('index')
})

app.post("/sleep", (req, res) => {
  exec(commands.openFileExplorer, execCallback);
  res.render("actions/system", req.body);
});

app.post("/shut-down", (req, res) => {
  exec(commands.shutDown, execCallback);
  res.render("actions/system", req.body);
});

app.post("/restart", (req, res) => {
  exec(commands.restart, execCallback);
  res.render("actions/system", req.body);
});

app.post("/file-explorer", (req, res) => {
  exec(commands.openFileExplorer, execCallback);
  res.render("actions/system", req.body);
});

app.listen(3001, () => console.log("Server running on port 3001"));
