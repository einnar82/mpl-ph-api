import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
    res.json({
        message: "Hello ExpressJS!",
    });
});
app.listen(process.env.PORT, () => {
    console.log(`app is listening at http://${process.env.Domain}:${process.env.PORT}`);
});
