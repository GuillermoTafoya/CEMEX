import mongoose from "mongoose";

const videogameAchievementsSchema = mongoose.Schema(
	{
		achId: {type: Number},
		achImg: {type: Image},
		achSummary: {type: Text}
	}
)

export default mongoose.model("vidAch", videogameAchievementsSchema);