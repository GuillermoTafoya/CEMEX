import { Router } from "express";
import { login } from "./api.login.controller.js"; // Login
import { leaderboard } from "./api.leaderboard.js"; // Leaderboard

import {
	getUsers,
	getUserData,
	// getUser,
	postUser,
	putUserData,
	// putUser,
	deleteUser,
	userLogin,
	getStats
} from "./api.controller.js";

const router = Router();

// User routes
router.get("/users", getUsers);
router.get("/users/:username", getUserData);
router.get("/userLogin", userLogin);

router.post("/userRegister", postUser);

router.post("/login", login); // Login
router.get("/leaderboard", leaderboard); // Leaderboard


router.put("/users/:username", putUserData);

router.delete("/user/:id", deleteUser);

router.get("/stats", getStats);


export default router;