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
);

userSchema.statics.isThisUsernameInUse = async function(username){
	try{
		const userBool = await this.findOne({username});
		if (userBool){	
			return true;
		}
		else{
			return false;
		}
	} catch(error) {
		return false;
	}
}

userSchema.statics.isThisEmailInUse = async function(email){
	try{
		const emailBool = await this.findOne({email});
		if (emailBool){	
			return true;
		}
		else{
			return false;
		}
	} catch(error) {
		return false;
	}
}


export default mongoose.model("User", userSchema);