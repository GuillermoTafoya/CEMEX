import User from "./api.model.user.js";
//import crypto from "crypto";
class rankedPlayer {
    constructor(username, wins, score, rank) {
        this.username = username;
        this.wins = wins;
        this.score = score;
        this.rank = rank;
    }
}
class player {
    constructor(username, wins, score) {
        this.username = username;
        this.wins = wins;
        this.score = score;
    }
}
export async function leaderboard(req, res) {
    const users = await User.find();
    try{
    // Get all usernames, wins and coins
    const usernames = users.map((u) => u.username);
    const wins = users.map((u) => u.wins);
    const coins = users.map((u) => u.coins);
    const totalNum = users.map((u) => u.totalNum);

    // Make an array of players with username, wins and score
    const players = [];
    for(let i = 0; i < usernames.length; i++) {
        players.push(new player(usernames[i], wins[i], wins[i]*(totalNum[i]+coins[i])));
    }
    // Sort players by score
    players.sort((a, b) => b.score - a.score);
    // Get top 10 players if there are more than 10, if not get all
    const top10 = players.slice(0, 10);

    // If my username is not on the top 10, put it at the end with its rank
    const myUserName = req.query.username
    var finalTop10 = [];

    if(top10.find((u) => u.username === myUserName)) {
        
        for (let i = 0; i < top10.length; i++) {
            finalTop10.push(new rankedPlayer(top10[i].username, top10[i].wins, top10[i].score, i+1));
        }
        
    }
    else{
        const myRank = players.findIndex((u) => u.username == myUserName);
        for (let i = 0; i < (top10.length < 10 ? top10.length : 9 ); i++) {
            finalTop10.push(new rankedPlayer(top10[i].username, top10[i].wins, top10[i].score, i+1));
        }
        finalTop10.push(new rankedPlayer(players[myRank].username, players[myRank].wins, players[myRank].score, myRank));
    }

    

    // Return top 10 players
    return res.status(200).json(finalTop10);
} 
catch(error){
    return res.status(500).json({error: top10}) // isLogin es falso por defecto
}
} 
