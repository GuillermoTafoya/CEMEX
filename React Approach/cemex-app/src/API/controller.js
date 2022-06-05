import modelUser from "./model.user.js";
import modelLeaderboard from "./model.leaderboard";
import modelVidAch from "./model.vidAch.js";
import modelVidSim from "./model.vidSim.js";
import modelUserAch from "./model.userAch.js";

const crypto = require("crypto-js");

// Get all registered users
export async function getUsers(req, res){
	const users = await modelUser.find();
	res.json(users);
}

// Get specific user by ObjectId
export async function getUser(req, res){
	const users = await modelUser.findById(res.params.id);
	res.json(users);
}

// Create a new user through sign up form
export async function postUser(req, res){
	const { name, email, dob, passwordHash, score, helmetNum, ordinaryNum, generalNum, totalNum, coins, admin, numAchUnlocked, weapon1, weapon2, weapon3, weapon4 } = req.body;
	const user = new modelUser({name, email, dob, passwordHash, score, helmetNum, ordinaryNum, generalNum, totalNum, coins, admin, numAchUnlocked, weapon1, weapon2, weapon3, weapon4});

	const hashing = cyprto.createHash("sha512");
	var passwordHashPost = hashing.update(mensaje).digest("base64");

	// Uno de estos:

	//var nameQuery = req.query.name;
	var namePost = req.params.name;
	
	var emailPost = req.params.email;
	var dobPost = req.params.dob;
	passwordHashPost = req.params.passwordHash;
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
	res.json(user);
}

// Change user data
export async function putUser(req, res){
	const user = await modelUser.findByIdAndUpdate(req.params.id, req.body, {
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

// Delete user from DB
// no funciona
export async function deleteUser(req, res){
	const user = await modelUser.findOneAndDelete(res.params.id);
	res.json.user();
}

// Attempt user login
export async function userLogin(req, res){

}

