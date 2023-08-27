import express from "express";

export const App = express();

App.get("/", (req, res) => {
  res.send(`⭐: App Running`);
});
