import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import Placeholder from '../assets/SpaceInvaders.gif'

class GameView extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        document.title = 'Juego'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <NavBar />
            
            <div className="spacer" />
            <section className = "sectionGlass container align-items-center justify-content-center">
                
            <div className="spacer" />
            <div className="spacer" />
                <img className='centered row col-8' src={Placeholder} alt="Placeholder" />
            </section>
        </div>
        
        )
    }
}

export default GameView;