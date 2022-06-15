import React, { Component, useState, useEffect } from 'react';
import { user } from '../API/api.controller.js';
import NavBar from '../components/navbar.js';
import "../Pages/Leaderboard.scss";

const User = ({rank,name,wins,score,length,isMe}) => {
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
            ${isMe ? "last-row" : len === data[0]}
            ${(idx === 0) && (data[0] === len) ? "bottom-left-corner" : ""}
            ${(idx === 3) && (data[0] === len) ? "bottom-right-corner" : ""}`}>{item}</div>)}
    </div>
    )
}

class LeaderboardView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leaderboardData: this.props.data,
            user : this.props.user
        }
        //console.log(this.state.leaderboardData);
    }
    
    componentDidMount() {
        document.title = 'Leaderboard'
        this.props.updateCurrentPage("leaderboard")
        this.setState(
            {user:this.props.user
            ,leaderboardData:this.props.data})

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            this.setState({
                leaderboardData: this.props.data,
                user : this.props.user
            })
        }
    }
    render() {
        
        return(
        

        <div className = "app--is-not-login">
            <div className="spacer" /> <div className='spacer'/>

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
                    {this.state.leaderboardData.map((player,index) => <User key={index+4} id={index+4} isMe = {this.state.user.username === player.username} rank={player.rank} name={player.username} wins={player.wins} score={player.score} length={this.state.leaderboardData.length}/>)}
                    <div className="spacer" />
                    <div className="spacer" />
                </section>
            </div>
        </div>
        
        )
    }
}

export default LeaderboardView;