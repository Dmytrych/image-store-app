import {configDotenv} from "dotenv";
import express from "express";

configDotenv()

const app = express();


app.listen(process.env.PORT);