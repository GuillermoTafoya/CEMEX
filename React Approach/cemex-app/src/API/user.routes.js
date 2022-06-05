import { Router } from "express";
import {
	getUsers,
	getUser,
	postUser,
	putUser,
	deleteUser,

} from "./user.controller.js";

const router = Router();

router.get("/users", getUser);
router.get("/user/:id", getUser);
router.post("/user", postUser);
router.put("/user/:id", putUser);
router.delete("/user/:id", deleteUser);

router.get("/users/:id", userLogin);

export default router;