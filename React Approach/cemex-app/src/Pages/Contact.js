import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import '../Pages/Contact.scss';

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
            <NavBar />
            <form className = "sectionGlass col-10 col-md-8 col-lg-6 centered" method='POST'>
                <div className='font-weight-bold placeholder-text'>Contáctanos</div>
                <div className="spacer" />
                <Input type="text" id="contact-form" label="Mensaje"  />
                <button className="button button--primary full-width" type="submit"> Enviar </button>
            </form>
        </div>
        
        )
    }
}

const Input = ({ id, type, label }) => (
    <textarea className="config-input inputGlass full-width no-resize" type={type} id={id} placeholder={label}/>
);

export default ContactView;