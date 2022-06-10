// import express from "express";
// import morgan from "morgan";
import cors from "cors";
import userRoutes from "./api.routes.js";
import express from "express";

// const express = require("express");


const server = express();

// const server = express();

// server.use(morgan("dev")); // Detect server request activity
server.use(cors()); // Allow connections from all addreses
server.use(express.json());
server.use(userRoutes);

export default server;