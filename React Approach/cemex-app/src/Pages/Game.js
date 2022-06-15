import React, { Component } from 'react';
import {UnityApp} from '../components/UnityGame.js';

import '../Pages/Game.scss';

class GameView extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        document.title = 'Juego'
        this.props.updateCurrentPage("juego")
        
    }

    updateNavbar = () => {
        this.props.updateNavbar() // Show or hide navbar
    }
    render() 

    {
        
        return(
        <div className = "app--is-not-login">
            <UnityApp update = {this.updateNavbar} />
        </div>
        // <button className="button--CAUTION centered" type="submit" onClick={this.updateNavbar}> NAVBAR </button>
        // <button className="button button--primary centered" type="submit" onClick={this.updateNavbar}> NAVBAR </button>
        )   
    }
}

export default GameView;