import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import '../Pages/Contact.scss';

class ContactView extends Component {
    constructor(props) {
        super(props);
		sendMessage: this.sendMessage.bind(this);
    }
    componentDidMount() {
        document.title = 'Soporte'
    }

	sendMessage = async (e) =>{
		e.preventDefault();
		const supportMessage = e.target[0].value;
		const payload = { message: supportMessage }
		var response = null;
		if (payload["message"] != ""){
			response = await fetch("http://localhost:5000/support", {
				method: "POST",
				body: JSON.stringify(payload),
				headers: {
					"Content-Type": "application/json"
				}
			});
			//var messageSent = await fetch("http://localhost:5000/support", response);
		}
		if (response != null) {
			alert("Mensaje enviado!");
		} else {
			alert("Escribe un mensaje primero.");
		}
	}
	
    render() {
        return(

        <div className = "app--is-not-login">
            <div className='spacer'/> <div className='spacer'/> 
            <div className="sectionGlass col-10 col-md-8 col-lg-6 centered">
                <div className='font-weight-bold placeholder-text'>Contáctanos</div>
                    <div className="spacer" />
                    <form onSubmit={this.sendMessage} className = "" method="POST">
                        <Input type="text" id="contact-form" label="Mensaje"  />
                        <button className="button button--primary full-width" type="submit">  Enviar </button>
                    </form>
            </div>
        </div>
        
        )
    }
}

const Input = ({ id, type, label }) => (
    <textarea className="config-input inputGlass full-width no-resize" type={type} id={id} placeholder={label}/>
);

export default ContactView;