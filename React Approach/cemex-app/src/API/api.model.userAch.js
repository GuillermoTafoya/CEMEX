import mongoose from "mongoose";

const userAchievement = mongoose.Schema(
	{
		username: {type: String},
		achievements: {type: Array}
	}
)

export default mongoose.model("userAch", userAchievement);