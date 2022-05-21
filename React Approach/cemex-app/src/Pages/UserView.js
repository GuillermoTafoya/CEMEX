import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

class UserView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        }
    }
    componentDidMount() {
        document.title = 'Usuario'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <NavBar />
            <section class = "display-block">
                <div>Usuario</div>
                <div>Foto</div>
                <div>Logros ?/100</div>
                <div>Monedas</div>
            </section>
        </div>
        
        )
    }
}

export default UserView;