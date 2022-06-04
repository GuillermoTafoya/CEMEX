import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

class PageNotFound extends Component {
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
            <NavBar />
            <div className="sectionGlass container align-items-center">
                <h1 className='centered CAUIION IMPORTANT'>ESTA PÁGINA NO EXISTE</h1>
            </div>
        </div>
        
        )
    }
}

export default PageNotFound;