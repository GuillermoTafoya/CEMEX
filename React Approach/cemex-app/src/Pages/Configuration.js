import React, { Component } from 'react';
import { updateUser } from '../API/api.controller.js';
import NavBar from '../components/navbar.js';

import '../Pages/Configuration.scss';

class user{
    constructor(username, email, passwordHash, admin, img, wins, dob, coins, ordinaryNum, generalNum, helmetNum, totalNum, numAchUnlocked, achievements, weapons) {
    this.username = username;
    this.email = email ;
    this.passwordHash = passwordHash;
    this.admin = admin ;
    this.dob = dob ;
    this.ordinaryNum = ordinaryNum ;
    this.generalNum = generalNum ;
    this.helmetNum = helmetNum ;
    this.totalNum = totalNum ;
    this.numAchUnlocked = numAchUnlocked ;
    this.weapons = weapons ;
    this.img = img;
    this.wins = wins;
    this.achievements = achievements;
    this.coins = coins;
    }
}

class ConfigurationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            updateUser: this.updateUser.bind(this)
        }
    }
    componentDidMount() {
        document.title = 'Configuración'
    }
    updateUser = (e) => {
        e.preventDefault();
        console.log("data: ",e.target.elements);
        var data = null;

        // Iterate through the form elements and get the values that are not empty
        for (let i = 0; i < e.target.elements.length; i++) {
            if (e.target.elements[i].value !== '') {
                data = {
                    [e.target.elements[i].name]: e.target.elements[i].value
                }
            } 
            else { // Keep the old value if the new value is empty
                // Check for where the form id is equal to the name of the user class
                // given constructor(username, email, passwordHash, admin, img, wins, dob, coins, ordinaryNum, generalNum, helmetNum, totalNum, numAchUnlocked, achievements, weapons) {
                if (e.target.id === 'username') {
                data = this.data
            }
            }
        }
        
    }
    
    render() {
        return(

        <div className = "app--is-not-login">
            <div className='spacer'/> <div className='spacer'/> 
            <section className = "container centered display-block justify-content-center">
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
                            <DatosPersonales onSubmit={this.state.updateUser}/>
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
        <form onSubmit={this.props.onSubmit} method = {"POST"}>
            <div className=".flex-container--configuration">
                <div >
                    <Input type="text" id="username" label="nombre de usuario"  />
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