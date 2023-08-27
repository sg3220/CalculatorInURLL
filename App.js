import express from "express";
import fs from "fs";

export const App = express();
App.use(express.json());

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

function saveHistory() {
  fs.writeFileSync("History.json", JSON.stringify(historyArray), (error) => {
    if (error) {
      console.error("💥: Error Writing History File");
    }
  });
}

let historyArray = [];
try {
  const Data = fs.readFileSync("History.json", "utf-8");
  historyArray = JSON.parse(Data);
} catch (error) {
  console.error("💥: Error Reading History File");
}

App.get("/", (req, res) => {
  res.send(`⭐: App Running`);
});

App.get("/History", (req, res) => {
  res.json(historyArray);
});

let Result = 0;

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

  res.json({ Expression: actualExpression, Answer: Result });
});

App.get("/:Expression*", (req, res) => {
  const originalURL = req.originalUrl;
  const textExpression = originalURL.slice(1);
  const arrayTextExpression = textExpression.split("/");

  if (arrayTextExpression.length < 3) {
    res.json({ Problem: "Expression Length Short" });
  }

  const actualExpression = expressionFunction(arrayTextExpression);
  const regexExpression = /^[0-9()+\-*/%.]*$/;

  if (!regexExpression.test(actualExpression)) {
    res.json({ Problem: "Invalid Operator/Number" });
  }

  Result = eval(actualExpression);
  Result = Number(Result.toFixed(2));

  const historyObject = {
    Expression: actualExpression,
    Answer: Result,
  };

  if (historyArray.length > 20) {
    historyArray.shift();
  }

  historyArray.push(historyObject);
  console.log(historyObject);
  console.log(historyArray);
  saveHistory();

  res.json({ Expression: actualExpression, Answer: Result });
});
