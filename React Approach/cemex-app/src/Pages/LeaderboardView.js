import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

//// GRAPH JS ////
class LeaderboardView extends Component {
    
    componentDidMount() {
        document.title = 'Estadísticas'
    }
    render() {
        
        return(
        

        <div className = "app--is-not-login">
            <NavBar />
            <section className = "sectionGlass">
                <p className='CAUTION centered'>Leaderboard</p>
            </section>
        </div>
        
        )
    }
}

export default LeaderboardView;