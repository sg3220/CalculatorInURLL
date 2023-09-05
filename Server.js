import dotenv from "dotenv";
import { App } from "./App.js";

dotenv.config({ path: "./Data/Configuration.env" });

const portNumber = process.env.PORT || 4000;

const Server = App.listen(portNumber, () => {
  console.log(`⭐: Server Running On portNumber: ${portNumber}`);
});
