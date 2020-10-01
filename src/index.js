import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

import { parsePlayerStatistitcs } from "./parsers/getPlayersStatistics";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/players/stats", async (req, res) => {
  try {
    const result = await parsePlayerStatistitcs();
    res.json({
      stats: result,
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/", (req, res) => {
  res.json({
    message: "Hello ExpressJS!",
  });
});

app.listen(4000, () => {
  console.log(`app is listening to port 4000`);
});
