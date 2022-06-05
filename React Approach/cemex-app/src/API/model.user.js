import mongoose from "mongoose";

const userSchema = mongoose.Schema(
	{
		name: {type: String },
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

export default mongoose.model("User", userSchema);