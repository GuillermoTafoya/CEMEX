import mongoose from "mongoose";

const currentPlayer = mongoose.Schema(
	{
		player: {type: String}
	}	
);

export default mongoose.model("currentPlayer", currentPlayer);
