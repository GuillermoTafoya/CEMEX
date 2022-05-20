import React, { Component } from 'react';

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
            <h1 className = "Example" >NavBar aqui</h1>
            <section class = "display-block">
                <div>Logros</div>
                <div>Fotos</div>
            </section>
        </div>
        
        )
    }
}

export default AchievementsView;