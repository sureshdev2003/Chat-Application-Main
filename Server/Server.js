import express from "express"
import "dotenv/config"
import cors from "cors";
import http from "http";

//create Express app and http server
const app = express()
const server= http.createServer(app);


//middleWave
app.use(express.json({limit:'4mb'}));
app.use(cors()); 

