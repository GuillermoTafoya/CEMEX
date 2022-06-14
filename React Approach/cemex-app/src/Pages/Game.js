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

    render() 

    {
        
        return(
        <div className = "app--is-not-login">
                <UnityApp />
        </div>
        )   
    }
}

export default GameView;