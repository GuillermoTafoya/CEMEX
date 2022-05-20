import React, { Component } from 'react';

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
            <h1 className = "Example" >NavBar aqui</h1>
            <section class = "display-block">
                <div>Juego WebGL</div>
            </section>
        </div>
        
        )
    }
}

export default GameView;