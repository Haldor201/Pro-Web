import express from "express"
import morgan from "morgan"
import {conectar} from "./db.js"
import Auth from "./routes/auth.routes.js"
import Game from "./routes/game.routes.js"
import cookieParser from "cookie-parser";
const app = express();
const port = 3000;
conectar()
app.use(morgan("dev"));
app.use(express.json())
//convierte las cookies en un json
app.use(cookieParser())



app.use("/api",Auth)
app.use("/api/games",Game)

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>')
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});