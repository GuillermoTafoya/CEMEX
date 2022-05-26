import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

import "./Achievements.scss";

import trophy from '../assets/UserView/trophy.png';


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
            <section className = "sectionGlass container">
                <div className='row mb-4 mt-4 ml-1 mr-1 align-items-center'>
                    <div className='achievementGlass'>
                        <img src={trophy} height="50px" width="50px" />
                    </div>
                </div>
                
            </section>
        </div>
        
        )
    }
}

export default AchievementsView;