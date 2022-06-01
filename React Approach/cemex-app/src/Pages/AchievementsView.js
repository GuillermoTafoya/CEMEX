import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

import "./Achievements.scss";

import trophy from '../assets/UserView/trophy.png';

const Achievement = ({isActive}) => {
    return(
    <div className={`centeredAchievement achievementGlass--is-${isActive === 'true' ? 'active' : 'inactive' }`}>
        <img src={trophy} height="50px" width="50px" />
    </div>
    )
}

class AchievementsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        }
        
    }
    componentDidMount() {
        document.title = 'Logros'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <NavBar />
            <div className='font-weight-bold placeholder-text'>Logros</div>
            <section className = "sectionGlass flex-container--achievements">
                    <Achievement isActive='true' />
                    <Achievement isActive='false' />
                    <Achievement isActive='true' />
                    <Achievement isActive='false' />
                    <Achievement isActive='false' />
                    <Achievement isActive='false' />

                    
                
            </section>
        </div>
        
        )
    }
}

export default AchievementsView;