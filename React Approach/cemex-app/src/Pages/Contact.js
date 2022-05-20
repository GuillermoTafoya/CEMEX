import React, { Component } from 'react';

class ContactView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        }
    }
    componentDidMount() {
        document.title = 'Soporte'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <h1 className = "Example" >NavBar aqui</h1>
            <section class = "display-block">
                <div>Contáctanos</div>
                <div>Seccion para mensaje</div>
                <div>Enviar</div>
            </section>
        </div>
        
        )
    }
}

export default ContactView;