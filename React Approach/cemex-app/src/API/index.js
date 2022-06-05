import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {Router} from "express";

const URI = "mongodb+srv://A01284213:cyberpunksAdmin@web-be-cluster.ti48frj.mongodb.net/?retryWrites=true&w=majority";
const server = express();

// User schema

const videogameSimulation = mongoose.Schema(
	{
		storyID: {type: String},
		storyName: {type: String},
		status: {type: String},
		duration: {type: Number}
	}
)

const leaderboard = mongoose.Schema(
	{
		lbName: {type: String},
		pfp: {type: Image},
		wins: {type: Number},
		score: {type: Number}
	}
)

const videogameAchievements = mongoose.Schema(
	{
		achId: {type: Number},
		achImg: {type: Image},
		achSummary: {type: Text}
	}
)

const userAchievement = mongoose.Schema(
	{
		username: {type: String},
		achvievements: {type: Array}
	}
)

const router = Router();

mongoose.model("videogameSimulation", videogameSimulation);
mongoose.model("leaderboard", leaderboard);
mongoose.model("videogameAchievements", videogameAchievements);
mongoose.model("userAchievement", userAchievement);

async function connectToDb(){
	try{
		await mongoose.connect(URI);
		console.log("Connected to Database");
	} catch {
		// console.log(error(error));
	}
}

connectToDb();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", postUsers);
router.put("/users/:id", putUsers);
router.delete("/users/:id", deleteUsers);

router.get("/userEnter", userLogin);
router.post("/userEnter", postUsers);