import express from "express";

export const App = express();
App.use(express.json());

App.get("/", (req, res) => {
  res.send(`⭐: App Running`);
});

App.get("/History", (req, res) => {
  res.send("⭐: History Route");
});

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

  res.json({ Expression: actualExpression, Answer: Result });
});
