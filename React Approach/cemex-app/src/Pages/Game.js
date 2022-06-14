import React, { Component } from 'react';
import {UnityApp} from '../components/UnityGame.js';

import '../Pages/Game.scss';

class GameView extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        document.title = 'Juego'
    }

    render() 

    {
        
        return(
        <div className = "app--is-not-login">
            
            <div className='spacer'/> <div className='spacer'/> 
                <UnityApp className="sectionGlass" />
        </div>
        )   
    }
}

export default GameView;