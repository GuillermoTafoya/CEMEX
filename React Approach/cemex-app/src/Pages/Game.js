import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

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
    render() {
        return(

        <div className = "app--is-not-login">
            <NavBar />
            <section class = "display-block">
                <div>Juego WebGL</div>
            </section>
        </div>
        
        )
    }
}

export default GameView;