import React, { Component } from 'react';

class ConfigurationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        }
    }
    componentDidMount() {
        document.title = 'Configuración'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <h1 className = "Example" >NavBar aqui</h1>
            <section class = "display-block">
                <h3>Configuración</h3>
                <div>Editar Perfil</div>
                <div>Foto de Perfil</div>
                <div>Cambiar Contraseña</div>
                <div>Cambiar Correo</div>
                <div>Eliminar Cuenta</div>
                <div>Confirmación de eliminar cuenta</div>
            </section>
        </div>
        
        )
    }
}

export default ConfigurationView;