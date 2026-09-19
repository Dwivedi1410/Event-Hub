import express, {type Express, type Request, type Response} from "express";
import {prisma} from "./config/db.js";

const app: Express = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())  //Middleware to parse json payLoads.

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to EventHub backend API");
})

app.listen(PORT, () => {
    console.log(`server is running on PORT: ${PORT}`);
})