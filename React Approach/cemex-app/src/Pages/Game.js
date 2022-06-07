import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

// API
import mongoose from "mongoose";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import {Router} from "express";

const URI = "mongodb+srv://mauricio:cuadros@cluster0.8jlk6.mongodb.net/?retryWrites=true&w=majority";
const server = express();

const User = mongoose.Schema(
	{
		username: {type: String},
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

mongoose.model("User", User);
mongoose.model("videogameSimulation", videogameSimulation);
mongoose.model("leaderboard", leaderboard);
mongoose.model("videogameAchievements", videogameAchievements);
mongoose.model("userAchievement", userAchievement);

async function connectToDb(){
	try{
		await mongoose.connect(URI);
		console.log("Connected to Database");
	} catch {
		//console.log(error);
	}
}

export async function getUsers(req, res) {
	const users = await User.find();
	res.json(users);
}

export async function getUser(req, res) {
	const users = await User.findById(req.params.username);
	res.json(users);
}

export async function postUsers(req, res) {
	const {username, email, dob, passwordHash, score, helmetNum, ordinaryNum, generalNum, totalNum, coins, admin, numAchUnlocked, weapon1, weapon2, weapon3, weapon4} = req.body;
	const user = new User({username, email, dob, passwordHash, score, helmetNum, ordinaryNum, generalNum, totalNum, coins, admin, numAchUnlocked, weapon1, weapon2, weapon3, weapon4});
	// Uno de estos dos:
	//var email = req.query.email;
	var email2 = req.params.email;
	await user.save();
	res.json(user);
}

export async function putUsers(req, res) {
	const user = await User.findByIdAndUpdate(req.params.username, req.body, {
		new: true,
	});
	res.json(user);
}
// no funciona
export async function deleteUsers(req, res) {
	const user = await User.findByIdAndDelete(req.params.username);
	// res.json(user);
}

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", postUsers);
router.put("/users/:id", putUsers);
router.delete("/users/:id", deleteUsers);

const game = document.getElementById("game");
game.setAttribute("href", "/game/?id=" + sessionStorage.ID);
// /API

class GameView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        }
    }
    componentDidMount() {
        document.title = 'Juego'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <NavBar />
            <section class = "display-block">
                <div>Juego WebGL</div>
            </section>
        </div>
        
        )
    }
}

export default GameView;