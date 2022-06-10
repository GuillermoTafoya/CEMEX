import { Router } from "express";
import {
	getUsers,
	// getUser,
	postUser,
	// putUser,
	deleteUser,
	userLogin
} from "./api.controller.js";

const router = Router();

// User routes
router.get("/users", getUsers);
// router.get("/user/:id", getUser);
router.post("/userRegister", postUser);
router.get("/userLogin", userLogin);
// router.put("/user/:id", putUser);
router.delete("/user/:id", deleteUser);


export default router;