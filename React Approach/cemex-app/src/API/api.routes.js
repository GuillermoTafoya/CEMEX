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
	getStats,
	countUsers,
	updateUser,
	getEnemyUser,
	sendSupport
} from "./api.controller.js";

const router = Router();

// User routes
router.get("/users", getUsers);
router.get("/user", getUserData);
router.get("/users/:username", getUserData2);

router.post("/userRegister", postUser);

router.post("/login", login); // Login
router.get("/leaderboard", leaderboard); // Leaderboard

router.post("/userUpdate", updateUser);

router.delete("/deleteUser", deleteUser);

router.get("/stats", getStats);
router.get("/userCount", countUsers);

router.put("/users/:username", putUserData);

router.post("/support", sendSupport);
router.put("/getEnemy", getEnemyUser);

export default router;