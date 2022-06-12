import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		username: {type: String},
		email: {type: String},
		passwordHash: {type: String},
		admin: {type: Boolean},
		img: {type: String},
		wins: {type: Number},
		dob: {type: Date},
		coins: {type: Number},
		ordinaryNum: {type: Number},
		generalNum: {type: Number},
		helmetNum: {type: Number},
		totalNum: {type: Number},
		numAchUnlocked: {type: Number},
		achievements: {type: Array},
		weapons: {type: Array},
	}	
)

export default mongoose.model("User", userSchema);