import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRoutes from "./user.routes.js";

const server = express();

server.use(morgan("dev")); // Detect server request activity
server.use(cors()); // Allow connections from all addreses
server.use(express.json());
server.use(userRoutes);

export default server;