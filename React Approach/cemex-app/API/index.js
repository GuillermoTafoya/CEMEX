import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {Router} from "express";

const URI = "mongodb+srv://A01284213:cyberpunksAdmin@web-be-cluster.ti48frj.mongodb.net/?retryWrites=true&w=majority";
const server = express();

const userSchema = mongoose.Schema(
	{
		name: {type: String },
		email: {type: String},
		dob: {type: Date},
		passwordHash: {type: String},
		score: {type: Number},
		helmetNum: {type: Number},
		ordinaryNum: {type: Number},
		generalNum: {type: Number},
		totalNum: {type: Number},
		coins: {type: Number},
		admin: {type: Boolean},
		numAchUnlocked: {type: Number},
		weapon1: {type: Boolean},
		weapon2: {type: Boolean},
		weapon3: {type: Boolean},
		weapon4: {type: Boolean}
	}	
)

const videogameSimulation = mongoose.Schema(
	{
		storyID: {type: String},
		storyName: {type: String},
		status: {type: String},
		duration: {type: Number},

	}
)

const leaderboard = mongoose.Schema(
	{
		lbName: {type: String},
		image:
	}
)