import express from "express"
import morgan from "morgan"
import {conectar} from "./db.js"

const app = express();
const port = 3000;
conectar()
app.use(morgan("dev"));

app.get('/', (req, res) => {
  res.send('<h1>Hola Mundo</h1>')
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
});