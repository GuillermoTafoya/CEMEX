import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import '../Pages/Contact.scss';

class ContactView extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        document.title = 'Soporte'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <NavBar />
            <div className="spacer" />
            <div className="sectionGlass col-10 col-md-8 col-lg-6 centered">
                <div className='font-weight-bold placeholder-text'>Contáctanos</div>
                    <div className="spacer" />
                    <form className = "" method="POST">
                        <Input type="text" id="contact-form" label="Mensaje"  />
                        <button className="button button--primary full-width" type="submit"> Enviar </button>
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