import modelUser from "./api.model.user.js";
import modelLeaderboard from "./api.model.leaderboard.js";
import modelVidSim from "./api.model.vidSim.js";
import modelUserAch from "./api.model.userAch.js";


//const crypto = require("crypto-js");

import crypto from "crypto";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers.js";

// Get all registered users
export async function getUsers(req, res){
	const users = await modelUser.find();
	res.json(users);
}
// Get specific user by ObjectId
// export async function getUser(req, res){
// 	const users = await modelUser.findById(res.params.id);
// 	res.json(users);
// }

// Create a new user through sign up form
export async function postUser(req, res){
	const {username, email, dob, passwordRegister } = req.body;

	const hashing = crypto.createHash("sha512");
    const passwordHash = hashing.update(passwordRegister).digest("base64");

	const user = new modelUser({username, email, dob, passwordHash, admin: "false", win: 0, score: "0", helmetNum: 0,
	ordinaryNum: 0, generalNum: 0, totalNum: 0, coins: 0, numAchUnlocked: 0, weapon1: "false", weapon2: "false", weapon3: "false",
	weapon4: "false"});

	await user.save();
	res.json(user);
}
/*
const loginController = {
    login: function (req, res) {
        const query = {
            Email: req.body.email,
            Contrasena: req.body.contrasena // Contraseña hasheada
        };

		try {
			const queryResult = await test.user.findOne(query);

			if (queryResult) {
				res.sendStatus(200);
			  }
			  else {
				res.sendStatus(404);
			  }
		} catch (error) {
			res.sendStatus(500);
               // return ERROR.sendErrorResponse(res, 
                   // 'Error al intentar iniciar sesión', 
                    //`Error al buscar usuario en la base de datos: ${error}`); 
							
		}
		
	}
}*/


// // Change user data
// export async function putUser(req, res){
// 	const user = await modelUser.findByIdAndUpdate(req.params.id, req.body, {
// 		new: true,
// 	});

// 	var namePut = req.params.name;
// 	var emailPut = req.params.email;
// 	var dobPut = req.params.dob;
// 	var passwordHashPut = req.params.passwordHash;
// 	var scorePut = req.params.score;
// 	var helmetNumPut = req.params.helmetNum;
// 	var ordinaryNumPut = req.params.ordinaryNum;
// 	var generalNumPut = req.params.generalNu;
// 	var totalNumPut = req.params.totalNum;
// 	var coinsPut = req.params.coins;
// 	var adminPut = req.params.admi;
// 	var numAchUnlockedPut = req.params.numAchUnlocked;
// 	var weapon1Put = req.params.weapon1;
// 	var weapon2Put = req.params.weapon2;
// 	var weapon3Put = req.params.weapon3;
// 	var weapon4Put = req.params.weapon4;
// 	res.json(user);
// }

// Delete user from DB
// no funciona
export async function deleteUser(req, res){
	const user = await modelUser.findOneAndDelete(res.params.id);
	res.json.user();
}

// Attempt user login
export async function userLogin(req, res){

}

export async function user(req, res){
	const doc = {username: res.params.users, admin: "false", email: res.params.email, wins: 0, dob: "", passwordHash: res.params.password, 
	score: "0", helmetNum: 0, ordinaryNum: 0, generalNum: 0, totalNum: 0, coins: 0, numAchUnlocked: 0, weapon: "false", 
	weapon2: "false", weapon3: "false", weapon4: "false"};
	const userPost = await postUser.insertOne(doc);
}