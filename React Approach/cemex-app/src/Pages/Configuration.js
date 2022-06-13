import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

import '../Pages/Configuration.scss';

/*import sword from '../assets/UserView/sword.png';
import shield from '../assets/UserView/shield.png';
import money from '../assets/UserView/money.png';
import arrow from '../assets/UserView/arrow.png';
import snowflake from '../assets/UserView/snowflake.png';
import waterdrop from '../assets/UserView/waterdrop.png';
import trophy from '../assets/UserView/trophy.png';

import Progressbar from '../components/progressbar.js';*/

class ConfigurationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data
        }
    }
    componentDidMount() {
        document.title = 'Configuración'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <div className='spacer'/> <div className='spacer'/> 
            <section class = "container centered display-block justify-content-center">
                <div className = "row mb-4 mt-4 ml-1 mr-1 align-items-center">

                    <div className="sectionGlass col-12 col-md-5">
                        <div className="col-12 circularMask">
                            <img src={this.state.data.img} alt="Profile" />
                        </div>
                        <h1 className='col-12 font-weight-bold userText'>{this.state.data.name}</h1>
                        <div className="align-items-center">

                            <button className="button button--primary full-width" type="button" name="button" > 
                                Cambiar imagen de perfil
                            </button>
                        </div>
                        
                    </div>

                    <div className='col-12 col-md-6'>
                        <div className="sectionGlass">
                            <p className='font-weight-bold'>Datos Personales</p>
                            <DatosPersonales />
                        </div>
                        <div className="sectionGlass">
                            <p className='CAUTION'>ELIMINAR CUENTA</p>
                            <button className="button--CAUTION full-width" type="submit"> ELIMINAR </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        )
    }
}

class DatosPersonales extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <form>
            <div className=".flex-container--configuration">
                <div >
                    <Input type="text" id="fullname-config" label="nombre de usuario"  />
                    <Input  type="email" id="email-config" label="email"/>
                    
                </div>
                <div>
                    <input  className="config-input inputGlass" type="text" 
                            placeholder="fecha de nacimiento" 
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} 
                            id="birthday-config" 
                            />
                    <Input  type="password" id="password-config" label="contraseña" />
                    <Input  type="password" id="password-confirm-config" label="confirmar nueva contraseña" />
                </div>
            </div>

            <button className="button button--primary full-width" type="submit"> Cambiar </button>
        </form>
        )
    }
}

const Input = ({ id, type, label }) => (
    <input className="config-input inputGlass full-width" type={type} id={id} placeholder={label}/>
);

export default ConfigurationView;