import mongoose from "mongoose";

const videogameSimulationSchema = mongoose.Schema(
	{
		storyID: {type: String},
		storyName: {type: String},
		status: {type: String},
		duration: {type: Number}
	}
)

export default mongoose.model("vidSim", videogameSimulationSchema);