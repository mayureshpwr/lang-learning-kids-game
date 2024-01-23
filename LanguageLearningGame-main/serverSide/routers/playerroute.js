import Express from "express";
import { createplayer } from "../controllers/playercontrollers.js";
import { allplayers } from "../controllers/playerscore.js";
import { updateScoreByEmail } from "../controllers/updatescore.js";
import { Hindi, Marathi, allquestion, english } from "../controllers/getquestion.js";
import { addquestion } from "../controllers/addquestion.js";
import { playerscore } from "../controllers/getscore.js";
const route = Express.Router();

route.post("/create", createplayer);
route.get("/score", allplayers);
route.post("/update", updateScoreByEmail);
route.get("/getscore", playerscore);

route.get("/question", allquestion);
route.get("/question/English", english);
route.get("/question/Marathi", Marathi);
route.get("/question/Hindi", Hindi);
route.post("/addquestion", addquestion);

export default route;