import express from "express";

export const App = express();
App.use(express.json());

App.get("/", (req, res) => {
  res.send(`⭐: App Running`);
});

App.get("/History", (req, res) => {
  res.send("⭐: History Route");
});

let number01 = 0,
  number02 = 0,
  Result = 0;
let Question = "";

App.get("/:operand01/Plus/:operand02", (req, res) => {
  number01 = parseInt(req.params.operand01);
  number02 = parseInt(req.params.operand02);

  Question = `${number01}+${number02}`;
  Result = number01 + number02;

  res.json({ Question: Question, Answer: Result });
});

App.get("/:operand01/Minus/:operand02", (req, res) => {
  number01 = parseInt(req.params.operand01);
  number02 = parseInt(req.params.operand02);

  Question = `${number01}-${number02}`;
  Result = number01 - number02;

  res.json({ Question: Question, Answer: Result });
});
