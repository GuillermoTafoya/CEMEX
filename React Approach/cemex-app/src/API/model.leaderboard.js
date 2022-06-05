import mongoose from "mongoose";

const leaderboardSchema = mongoose.Schema(
	{
		lbName: {type: String},
		pfp: {type: Image},
		wins: {type: Number},
		score: {type: Number}
	}
)

export default mongoose.model("leaderboard", leaderboardSchema);