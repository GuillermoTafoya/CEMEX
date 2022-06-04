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

mongoose.model("User", userSchema);
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

// Get all users
async function getUsers(req, res) {
	const users = await userSchema.find();
	res.json(users);
}

// Get specific user by ObjectId
async function getUser(req, res) {
	const users = await userSchema.findById(req.params.id);
	res.json(users);
}

// Create a new user through signup form
async function postUsers(req, res) {
	const { name, email, dob, passwordHash, score, helmetNum, ordinaryNum, generalNum, totalNum, coins, admin, numAchUnlocked, weapon1, weapon2, weapon3, weapon4 } = req.body;
	const user = new userSchema({name, email, dob, passwordHash, score, helmetNum, ordinaryNum, generalNum, totalNum, coins, admin, numAchUnlocked, weapon1, weapon2, weapon3, weapon4});
	// Uno de estos dos:
	// var nameQuery = req.query.name;
	var namePost = req.params.name;

	var emailPost = req.params.email;
	var dobPost = req.params.dob;
	var passwordHashPost = req.params.passwordHash;
	var scorePost = req.params.score;
	var helmetNumPost = req.params.helmetNum;
	var ordinaryNumPost = req.params.ordinaryNum;
	var generalNumPost = req.params.generalNu;
	var totalNumPost = req.params.totalNum;
	var coinsPost = req.params.coins;
	var adminPost = req.params.admi;
	var numAchUnlockedPost = req.params.numAchUnlocked;
	var weapon1Post = req.params.weapon1;
	var weapon2Post = req.params.weapon2;
	var weapon3Post = req.params.weapon3;
	var weapon4Post = req.params.weapon4;
	await user.save();

	// res.json(user); // OG
	req.json(user);
}

async function putUsers(req, res) {
	const user = await userSchema.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	var namePut = req.params.name;
	var emailPut = req.params.email;
	var dobPut = req.params.dob;
	var passwordHashPut = req.params.passwordHash;
	var scorePut = req.params.score;
	var helmetNumPut = req.params.helmetNum;
	var ordinaryNumPut = req.params.ordinaryNum;
	var generalNumPut = req.params.generalNu;
	var totalNumPut = req.params.totalNum;
	var coinsPut = req.params.coins;
	var adminPut = req.params.admi;
	var numAchUnlockedPut = req.params.numAchUnlocked;
	var weapon1Put = req.params.weapon1;
	var weapon2Put = req.params.weapon2;
	var weapon3Put = req.params.weapon3;
	var weapon4Put = req.params.weapon4;
	res.json(user);
}

// no funciona
async function deleteUsers(req, res) {
	const user = await userSchema.findByIdAndDelete(req.params.id);
	// res.json(user);
}

async function userLogin(req, res){
	
}

connectToDb();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", postUsers);
router.put("/users/:id", putUsers);
router.delete("/users/:id", deleteUsers);

router.get("/userEnter", userLogin);
router.post("/userEnter", postUsers);