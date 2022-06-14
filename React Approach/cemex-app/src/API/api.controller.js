import modelUser from "./api.model.user.js";
import modelMessage from "./api.model.support.js";
import User from "./api.model.user.js";

//const crypto = require("crypto-js");

import crypto from "crypto";
//import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers.js";

// Get all registered users, funciona
export async function getUsers(req, res){
	const users = await modelUser.find();
	res.json(users);
}

export async function getUserData2(req, res){
	const userData = await modelUser.find({
		username: req.params.username,
	}
	);
	res.json(userData[0]);
}

// Get specific user data, funciona
export async function getUserData(req, res){
	// First, we retrieve the user from the DB
	const users = await User.find();
	const user = users.filter((u) => u.username === req.query.username)[0]; 
	return res.json(user);
}

// Put specific user data, funciona, poner datos en body
export async function putUserData(req, res){
	const userputData = await modelUser.findOneAndUpdate({ "username" : req.params.username }, req.body, {
		new: true,
	});
	res.json(userputData);
}


// Create a new user through sign up form
export async function postUser(req, res){
	const {username, email, dob, passwordRegister } = req.body;
	
	const doesEmailExists = await modelUser.isThisEmailInUse(email);
	const doesUsernameExists = await modelUser.isThisUsernameInUse(username);

	if(!doesEmailExists && !doesUsernameExists){
		const passwordHash = crypto.createHash("sha512").update(passwordRegister).digest("base64");
		const usuario = new modelUser({username, email, passwordHash, admin: "false", img: "", dob, wins: 0, coins: "0",  ordinaryNum: 0, generalNum: 0,  helmetNum: 0,
		totalNum: 0, coins: 0, numAchUnlocked: 0, achievements: [false, false, false, false, false, false], weapons: [false, false, false, false]});
		await usuario.save();
		res.status(200).json({usuario, invalidEmail: doesEmailExists, invalidUsername: doesUsernameExists});
	}
	else{
		res.status(404).json({error: "El usuario y/o email ya están siendo usados por otro usuario", invalidEmail: doesEmailExists, invalidUsername: doesUsernameExists});
	}	
}

// Delete user from DB
// no funciona
export async function deleteUser(req, res){
	const {username} = req.body;
	const user = await modelUser.findOneAndDelete({ username: username });
	res.status(200).json({msg: "User deleted."});
}


// No está bien
export async function user(req, res){
	const doc = {username: res.params.users, admin: "false", email: res.params.email, wins: 0, dob: "", passwordHash: res.params.password, 
	score: "0", helmetNum: 0, ordinaryNum: 0, generalNum: 0, totalNum: 0, coins: 0, numAchUnlocked: 0, weapon: "false", 
	weapon2: "false", weapon3: "false", weapon4: "false"};
	const userPost = await postUser.insertOne(doc);
}


// A post metod to update user data in DB, but only the given fields
export async function updateUser(req, res){


	const {previus_username, username, email, _ , dob, alreadyEncrypted } = req.body;
	var passwordHash = req.body.passwordHash;

	if (alreadyEncrypted !== "false") {
		passwordHash = crypto.createHash("sha512").update(passwordHash).digest("base64");
	}

	// Validate if the new username and email are already in use
	const doesEmailExists = await modelUser.isThisEmailInUse(email);
	const doesUsernameExists = await modelUser.isThisUsernameInUse(username);

	// If the new username and email are not in use, update the user
	if(doesEmailExists){
		res.status(404).json({error: "Este email ya está siendo usado por otro usuario", invalidEmail: doesEmailExists});
	}
	if (doesUsernameExists) {
		res.status(404).json({error: "Este username ya está siendo utilizado por otro usuario", invalidUsername: doesUsernameExists});
	}

	// First, we retrieve the user from the DB
	const users = await User.find();
  	const user = users.filter((u) => u.username === previus_username)[0]; // Filtra por username

	// Then, we update the user with the given fields
	const newUser = {	
		username: username,
		email: email,
		passwordHash: passwordHash,
		dob: dob,
		admin: user.admin,
		img: user.img,
		wins: user.wins,
		coins: user.coins,
		ordinaryNum: user.ordinaryNum,	
		generalNum: user.generalNum,
		helmetNum: user.helmetNum,
		totalNum: user.totalNum,
		numAchUnlocked: user.numAchUnlocked,
		achievements: user.achievements,
		weapons: user.weapons}

	// Finally, we update the user in the DB
	const userUpdate = await User.findOneAndUpdate({ "username" : previus_username }, newUser, {
		new: true,
	});
	res.json(userUpdate);

}

//
export async function getStats(req, res){
	const users = await modelUser.find();
	const totalUsers = users.length;
	//Count all coins from all users
	const totalCoins = users.reduce((acc, cur) => acc + cur.coins, 0);
	//Count all wins from all users
	const totalWins = users.reduce((acc, cur) => acc + cur.wins, 0);
	//Count all avgOrdinary from all users
	const totalAvgOrdinary = users.reduce((acc, cur) => acc + cur.ordinaryNum, 0);
	//Count all avgGeneral from all users
	const totalAvgGeneral = users.reduce((acc, cur) => acc + cur.generalNum, 0);
	//Count all avgHelmet from all users
	const totalAvgHelmet = users.reduce((acc, cur) => acc + cur.helmetNum, 0);
	//Count all avgTotal from all users
	const totalAvgTotal = users.reduce((acc, cur) => acc + cur.totalNum, 0);

	
	const avgCoins = totalCoins / totalUsers;
	const avgWins = totalWins / totalUsers;
	const avgOrdinary = totalAvgOrdinary / totalUsers;
	const avgGeneral = totalAvgGeneral / totalUsers;
	const avgHelmet = totalAvgHelmet / totalUsers;
	const avgTotal = totalAvgTotal / totalUsers;
	const stats = {avgCoins, avgWins, avgOrdinary, avgGeneral, avgHelmet, avgTotal};
	if (stats) {
	res.status(200).json(stats);
}else
	res.status(404).json({error: "No hay datos"});
}

export async function countUsers(req, res){
	const users = await modelUser.find();
	const totalUsers = users.length;
	res.status(200).json({userCount: totalUsers});
}

export async function getEnemyUser(req, res){
	const users = await modelUser.find();
	const {username} = req.body;
	const totalUsers = users.length;
	var sameUser = true;
	var enemyNum;
	var enemy;
	// enemyNum = Math.floor(Math.random() * totalUsers);

	while (sameUser == true) {
		enemyNum = Math.floor(Math.random() * totalUsers);
		enemy = users[enemyNum];
		// console.log(enemy.username);
		console.log(enemy);
		if (enemy.username != username){
			sameUser = false;
		}
	}

res.status(200).json(enemy);
}

export async function sendSupport(req, res){
	const {message} = req.body;
	const newMessage = new modelMessage({message});
	await newMessage.save();
	res.json(newMessage);
}