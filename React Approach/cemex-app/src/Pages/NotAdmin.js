import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

class NotAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        }
    }
    componentDidMount() {
        document.title = 'PAGE NOT FOUND'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <div className='spacer'/> <div className='spacer'/>
            <div className="sectionGlass container align-items-center">
                <div className='spacer' />
                <div className='spacer' />
                <h1 className='centered CAUIION IMPORTANT'>No tienes permisos para visualizar esta página.</h1>
                
            </div>
        </div>
        
        )
    }
}

export default NotAdmin;