import "reflect-metadata";
import express from "express";
import cors from "cors";
import { config } from "dotenv";
import router from "./route";

config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`API listening on port ${process.env.PORT}`);
});
