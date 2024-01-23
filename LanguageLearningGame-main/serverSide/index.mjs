import Express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routers/playerroute.js";

const app = Express();
app.use(bodyParser.json());
app.use(cors());

dotenv.config();

const port = process.env.PORT || 8000;
const url = process.env.MONGO_URL;

mongoose.connect(url).then(() => {
    console.log("connected");
    app.listen(port, () => {
        console.log("servers is running")
    })
}).catch(error => { console.log(error) });



app.use("/api", route);