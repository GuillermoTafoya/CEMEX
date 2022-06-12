import React, { Component, useState, useEffect } from 'react';
import NavBar from '../components/navbar.js';
import "../Pages/Leaderboard.scss";

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
    constructor(props) {
        super(props);
        this.state = {
            leaderboardData: this.props.data
        }
    }
    
    componentDidMount() {
        document.title = 'Leaderboard'
    }
    render() {
        
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
                    {this.state.leaderboardData.map((player,index) => <User key={index+4} id={index+4} rank={index+1} name={player.name} wins={player.wins} score={player.score} length={this.state.leaderboardData.length}/>)}
                    <div className="spacer" />
                    <div className="spacer" />
                </section>
            </div>
        </div>
        
        )
    }
}

export default LeaderboardView;