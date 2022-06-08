import server from "./api.server.js";
import { connectToDb } from "./api.db.js";

// const express = require("express");
// const app = express();

connectToDb();

server.listen(5000);

// app.get('/', (req, res) => {
// 	res.send('Online');
// })