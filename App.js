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
  };
  return arrayTextExpression
    .map((element) => operatorList[element] || element)
    .join("");
}

App.get("/:Expression*", (req, res) => {
  const originalURL = req.originalUrl;

  const textExpression = originalURL.slice(1);

  const arrayTextExpression = textExpression.split("/");

  const actualExpression = expressionFunction(arrayTextExpression);

  Result = eval(actualExpression);

  Result = Number(Result.toFixed(2));
  console.log(Result);

  res.json({ Expression: actualExpression, Answer: Result });
});
