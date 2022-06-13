import modelUser from "./api.model.user.js";

//const crypto = require("crypto-js");

import crypto from "crypto";
//import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers.js";

// Get all registered users, funciona
export async function getUsers(req, res){
	const users = await modelUser.find();
	res.json(users);
}
// Get specific user data, funciona
export async function getUserData(req, res){
	const userData = await modelUser.find({
		username: req.params.username,
	}
	);
	res.json(userData[0]);
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

// No está bien
export async function user(req, res){
	const doc = {username: res.params.users, admin: "false", email: res.params.email, wins: 0, dob: "", passwordHash: res.params.password, 
	score: "0", helmetNum: 0, ordinaryNum: 0, generalNum: 0, totalNum: 0, coins: 0, numAchUnlocked: 0, weapon: "false", 
	weapon2: "false", weapon3: "false", weapon4: "false"};
	const userPost = await postUser.insertOne(doc);
}

export async function getStats(req, res){
	const users = await modelUser.find();
	const totalUsers = users.length;
	var acumCoins = 0;
	var acumOrdinary = 0;
	var acumGeneral = 0;
	var acumHelmet = 0;
	var acumTotal = 0;

	for (let i = 0; i < totalUsers; i++) {
		let user = users[i];
		acumCoins += user.coins;
		acumOrdinary += user.ordinaryNum;
		acumGeneral += user.generalNum;
		acumHelmet += user.helmetNum;
		acumTotal += user.totalNum;
	}
	var avgCoins = acumCoins / totalUsers;
	var avgOrdinary = acumOrdinary / totalUsers;
	var avgGeneral = acumGeneral / totalUsers;
	var avgHelmet = acumHelmet / totalUsers;
	var avgTotal = acumTotal / totalUsers;
	res.status(200).json({averageCoins: avgCoins, averageOrdinary: avgOrdinary, averageGeneral: avgGeneral, averageHelmet: avgHelmet, averageTotal: avgTotal});
}