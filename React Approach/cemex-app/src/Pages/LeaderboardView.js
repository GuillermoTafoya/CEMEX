import React, { Component, useState, useEffect } from 'react';
import NavBar from '../components/navbar.js';
import "../Pages/Leaderboard.scss";


class player {
    constructor(name, wins, score) {
        this.name = name;
        this.wins = wins;
        this.score = score;
    }
}
const players = [
                        new player("Johny",100,100),
                        new player("Bob",90,90),
                        new player("Juan",80,80),
                        new player("Pedro",70,70),
                        new player("Lucas",60,60),
                        new player("Dylan",50,50),
                        new player("Tú",0,0)
                    ];

const User = ({rank,name,wins,score,length}) => {
    const [data, setData] = useState([]);
    const [len, setLen] = useState(length);
    useEffect(() => {
    setData(
        [rank,name,wins,score]
    )
    }, [rank,name,wins,score]);
    useEffect(() => {
        setLen(length);
    }, [length]);

    return(
    <div className="row">
        {data.map((item,idx) => <div key={idx} className={`col-3 
            table-cell${rank%2===0 ? "--odd" : "--even"} 
            ${(data[0] === len) ? "last-row" : len === data[0]}
            ${(idx === 0) && (data[0] === len) ? "bottom-left-corner" : ""}
            ${(idx === 3) && (data[0] === len) ? "bottom-right-corner" : ""}`}>{item}</div>)}
    </div>
    )
}

class LeaderboardView extends Component {
    
    componentDidMount() {
        document.title = 'Leaderboard'
    }
    render() {
        console.log(players.length);
        
        return(
        

        <div className = "app--is-not-login">
            <NavBar />
            
            <div className="spacer" />

            <div className = "sectionGlass col-10 centered">
                <p className='font-weight-bold placeholder-text centered'>Leaderboard</p>
                <section className="container centered align-items-center">


                <div className="row header">
                    {["Rank","Name","Wins","Score"].map((item,idx) => 
                        <div key={idx} id={idx} className={`col-3 table-cell--header ${item === "Rank" ? "top-left-corner" : ""} ${item === "Score" ? "top-right-corner" : ""}`}>
                                {item}
                        </div>)
                    }
                    <div className="spacer" />
                </div>
                    {players.map((player,index) => <User key={index+4} id={index+4} rank={index+1} name={player.name} wins={player.wins} score={player.score} length={players.length}/>)}
                    <div className="spacer" />
                    <div className="spacer" />
                </section>
            </div>
        </div>
        
        )
    }
}

export default LeaderboardView;