import {connectToDb} from "./db.js";
import server from "./server.js";

connectToDb();

server.listen(5000);
// server.listen(3000);