import React, { Component } from 'react';
import ImageSelectPopUp from '../components/ImageSelectPopUp.js';
import ProfilePlaceholder from '../assets/UserView/panda.png'; 

import '../Pages/Configuration.scss';

class ConfigurationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            updateUser: this.updateUser.bind(this),
            deleteUser: this.deleteUser.bind(this),
            selectImage: false,
        }
        this.activatePopUp = this.activatePopUp.bind(this)
		
    }
    componentDidMount() {
        document.title = 'Configuración'
        this.props.updateCurrentPage("configuracion")
        this.setState(
            {data:this.props.data})

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data) {
            this.setState({
                data: this.props.data
            })
        }
    }


	deleteUser = async () => {
		const userToDelete = {
            username: this.state.data.username,
        }
        const payload = {
            method: "DELETE", 
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(userToDelete),
        }
    
        // Envía req

        //const response = await fetch("http://localhost:5000/deleteUser", payload);
        //const confirmation = await response.json(); // Obtiene respuesta
        alert("Cuenta eliminada")

        sessionStorage.setItem("loggedIn", false);

        console.log("confirmation");
        window.location.reload(false);
	}

    updateUser = async (e) => {
        e.preventDefault();
        
        var data = [];

        // Iterate through the form elements and get the values that are not empty
        for (let i = 0; i < e.target.elements.length-2; i++) {
            //console.log("control 1: ",e.target.elements[i].value);
            if (e.target.elements[i].value !== '') {
                data.push(e.target.elements[i].value)
            } 
            else { // Keep the old value if the new value is empty
                // Check for where the form id is equal to the user class
                for(var name in this.state.data) {
                    //console.log("control 2: ",name);
                    if(e.target.elements[i].id === name) {
                        data.push(this.state.data[name])
                        break;
                    }
                }
            }
        }
        const pw = e.target.elements["password"].value ;
        const pw_confirm = e.target.elements["password-confirm"].value ;
        var passwordHash = null;
        var alreadyEncrypted = false;
        // XOR the password and password-confirm
        if (!pw != !pw_confirm) {
            alert("Si cambias la contraseña, debes confirmarla");
            return;
        }
        if (pw !== pw_confirm) {
            alert("Las contraseñas no coinciden");
            return;
        }
        if (pw === pw_confirm && pw !== '') {
            passwordHash = pw;
        } else{
            passwordHash = this.state.data.passwordHash;
            alreadyEncrypted = true;
        }

        const username = data[0];
        const email = data[1];
        const dob = data[2];

        const d = {
            previus_username: this.state.data.username,
            username: username,
            email: email,
            passwordHash: passwordHash,
            dob: dob,
            alreadyEncrypted: alreadyEncrypted
        }
        

        console.log("user: ",this.state.data);
        console.log("data: ",data);
        console.log("d: ",d);
        console.log("d str: ",JSON.stringify(d));

        const opciones = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(d),
            }
    
        // Envía req
        const response = await fetch("http://localhost:5000/userUpdate", opciones);

        const datosRegistro = await response.json(); // Obtiene respuesta

        console.log("datosRegistro: ",datosRegistro);


    }  // End of updateUser
        

    activatePopUp(){
        console.log("activatePopUp");
        this.setState({
            selectImage: !this.state.selectImage,
        })
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <div className='spacer'/> <div className='spacer'/> 
            {this.state.selectImage && 
                <ImageSelectPopUp
                    isActive = {this.state.selectImage}
                    updateIsActive = {this.activatePopUp}
                    images = {[
                        ProfilePlaceholder,
                        "https://cdn.mos.cms.futurecdn.net/yCPyoZDQBBcXikqxkeW2jJ-1024-80.jpg.webp",
                        "https://drive.google.com/uc?export=view&id=11RfVwK97Nr6oVGgkGfvFTMLX9NlzwgwB",
                        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.vieravet.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge%2Fpublic%2Fmixed-breed-cat-breed-info.jpg%3Fitok%3DfMSg3hGL&f=1&nofb=1"
                    ]}
                />}
            <section className = "container centered display-block justify-content-center">
                
                <div className = "row mb-4 mt-4 ml-1 mr-1 align-items-center">
                <div className="col-o col-md-1" />
                    <div className="sectionGlass col-12 col-md-5">
                        <div className="circularMask">
                            <img src={this.state.data.img} alt="Profile" />
                        </div>
                        <h1 className='col-12 font-weight-bold userText'>{this.state.data.name}</h1>
                        <div className="align-items-center">

                            <button className="button button--primary full-width" type="button" name="button" onClick={this.activatePopUp} > 
                                Cambiar imagen de perfil
                            </button>
                        </div>
                        
                    </div>

                    <div className='col-12 col-md-5'>
                        <div className="sectionGlass">
                            <p className='font-weight-bold'>Datos Personales</p>
                            <DatosPersonales onSubmit={this.state.updateUser}/>
                        </div>
                        <div className="sectionGlass">
                            <p className='CAUTION'>ELIMINAR CUENTA</p>
                            <button className="button--CAUTION full-width" type="submit" onClick={this.deleteUser}> ELIMINAR </button>
                        </div>
                    </div>
                    <div className="col-0 col-md-1"></div>
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
    // given constructor(username, email, passwordHash, admin, img, wins, dob, coins, ordinaryNum, generalNum, helmetNum, totalNum, numAchUnlocked, achievements, weapons)
    render() {
        return (
        <form onSubmit={this.props.onSubmit} method = {"POST"}>
            <div className=".flex-container--configuration">
                <div >
                    <Input type="text" id="username" label="nombre de usuario"  />
                    <Input  type="email" id="email" label="email"/>
                    
                </div>
                <div>
                    <input  className="config-input inputGlass" type="text" 
                            placeholder="fecha de nacimiento" 
                            onFocus={(e) => (e.target.type = "date")}
                            onBlur={(e) => (e.target.type = "text")} 
                            id="dob" 
                            />
                    <Input  type="password" id="password" label="contraseña" />
                    <Input  type="password" id="password-confirm" label="confirmar nueva contraseña" />
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