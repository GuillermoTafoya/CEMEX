import React, { Component } from 'react';

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
            <h1 className = "Example" >NavBar aqui</h1>
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