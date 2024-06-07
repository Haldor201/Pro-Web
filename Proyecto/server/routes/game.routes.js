import {Router} from "express";
import {addGame,gameFound,gameList,gameListP,gameBuy} from "../controllers/games.controller.js";
import { authRequired } from "../middlewares/validateToken.js";
const router=Router();

router.post("/addGame",addGame);
router.post("/gameFound/:id",gameFound);
router.get("/allgames",gameList);
router.get("/allgamesP",authRequired,gameListP);
router.post("/buygame",authRequired,gameBuy);

export default router;