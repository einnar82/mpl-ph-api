import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";

import { getTeams } from "./parsers/getAllTeams";

const app = express();

app.use(cors());
app.use(bodyParser.json());

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

app.listen(4000, () => {
  console.log(`app is listening to port 4000`);
});
