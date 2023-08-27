import express from "express";
import ejs from "ejs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const App = express();

App.engine("ejs", ejs.renderFile);
App.set("view engine", "ejs");
App.use(express.json());
App.use(express.static(path.join(__dirname, "Public")));

function expressionFunction(arrayTextExpression) {
  const operatorList = {
    Plus: "+",
    Minus: "-",
    Into: "*",
    By: "/",
    Remainder: "%",
    RaisedTo: "**",
    AND: "&",
    OR: "|",
    XOR: "^",
    LeftBracket: "(",
    RightBracket: ")",
  };

  return arrayTextExpression
    .map((element) => operatorList[element] || element)
    .join("");
}

let historyArray = [];
let Result = 0;

function saveHistory() {
  fs.writeFileSync("History.json", JSON.stringify(historyArray), (error) => {
    if (error) {
      console.error("💥: Error Writing History File");
    }
  });
}

try {
  const Data = fs.readFileSync("History.json", "utf-8");
  historyArray = JSON.parse(Data);
} catch (error) {
  console.error("💥: Error Reading History File");
}

App.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Views", "Index.html"));
});

App.get("/History", (req, res) => {
  res.render("History", { historyArray });
});

App.get("/BitwiseOperations/:Expression*", (req, res) => {
  const originalURL = req.originalUrl;
  const textExpression = originalURL.split("/BitwiseOperations/")[1];
  const arrayTextExpression = textExpression.split("/");

  if (arrayTextExpression.length < 3) {
    res.json({
      Problem: "Expression Length Short",
    });
  }

  const actualExpression = expressionFunction(arrayTextExpression);

  const regexExpression = /^[0-9&|^()]*$/;
  if (!regexExpression.test(actualExpression)) {
    res.json({ Problem: "Invalid Operator/Number" });
  }

  const Result = eval(actualExpression);

  const historyObject = {
    Expression: actualExpression,
    Answer: Result,
  };

  if (historyArray.length > 20) {
    historyArray.shift();
  }

  historyArray.push(historyObject);
  saveHistory();

  res.json({ Expression: actualExpression, Answer: Result });
});

App.get("/:Expression*", (req, res) => {
  const originalURL = req.originalUrl;
  const textExpression = originalURL.slice(1);
  const arrayTextExpression = textExpression.split("/");

  if (arrayTextExpression.length < 3) {
    return res.json({ Problem: "Expression Length Short" });
  }

  const actualExpression = expressionFunction(arrayTextExpression);

  const regexExpression = /^[0-9()+\-*/%.]*$/;
  if (!regexExpression.test(actualExpression)) {
    return res.json({ Problem: "Invalid Operator/Number" });
  }

  Result = Number(eval(actualExpression).toFixed(2));

  const historyObject = {
    Expression: actualExpression,
    Answer: Result,
  };

  if (historyArray.length > 20) {
    historyArray.shift();
  }

  historyArray.push(historyObject);
  saveHistory();

  res.json({ Expression: actualExpression, Answer: Result });
});
