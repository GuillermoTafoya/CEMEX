import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import {UnityApp} from '../components/UnityGame.js';
import App from '../App.js';

class GameView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        }
    }
    componentDidMount() {
        document.title = 'Juego'
    }

    render() 
    {
        return(
        <div className = "app--is-not-login">
            <NavBar />
            
            <div className="spacer" />
            
            {/* <section className = "sectionGlass container align-items-center justify-content-center"> */}
            <UnityApp/>
            <div className="spacer" />
            <div className="spacer" />
               
            {/* </section> */}
        </div>
        )   
    }
}

export default GameView;