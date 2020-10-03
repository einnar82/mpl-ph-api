import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

import { parsePlayerStatistitcs } from "./parsers/getPlayersStatistics";
import { getTeams } from "./parsers/getAllTeams";
import {getRank} from "./parsers/getRank";
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

app.get("/allTeams", async (req, res) => {
  try{
    const allTeams = await getTeams();
    res.json({
      allTeams,
    });
  }catch(err){
    res.status(500).send(err);
  }
});
app.get("/getRank", async (req, res) => {
  try{
    const Rank = await getRank();
    res.json({
      Rank,
    });
  }catch(err){
    res.status(500).send(err);
  }
});
app.listen(4000, () => {
  console.log(`app is listening to port 4000`);
});
