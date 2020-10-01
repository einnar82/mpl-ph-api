import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config";
import teams from "./allTeams";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello ExpressJS!",
  });
});

app.get("/teams", teams);

app.listen(4000, () => {
  console.log(`app is listening to port 4000`);
});
