import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

import '../Pages/UserView.scss';

import ProfilePlaceholder from '../assets/UserView/panda.png';  //background.jpg; ProfilePlaceholder.png;

import sword from '../assets/UserView/sword.png';
import money from '../assets/UserView/money.png';


import trophy from '../assets/UserView/trophy.png';
import ordinary from '../assets/UserView/ordinary.png';
import general from '../assets/UserView/general.png';
import helmet from '../assets/UserView/helmet.png';


class UserView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        }
    }
    componentDidMount() {
        document.title = 'Usuario'
    }
    
    render() {
        return(
        <div className = "app--is-not-login">
            <NavBar />
            <section className = "container centered display-block justify-content-center">
                <div className = "row mb-4 mt-4 ml-1 mr-1 align-items-center">

                    <div className='col-0 col-md-1'/>
                    <div className="sectionGlass col-12 col-md-4">
                        <div className="col-12 circularMask">
                            <img src={ProfilePlaceholder} alt="Profile" />
                        </div>
                        <h1 className='col-12 font-weight-bold userText'>Usuario</h1>

                        <div className="grid-container align-items-center">
                            <div className="grid-item-centered">
                                <img src={sword} height="35px" width="35px" alt="Wins"/>
                                <p className='my-auto'>20 Wins</p>
                            </div>
                        </div>

                    </div>

                    <div className='col-0 col-md-2'/>

                    <div className='col-12 col-md-4 '>
                        <div className="sectionGlass align-items-center">

                            <p className='font-weight-bold'>Tropas</p>

                            <div className="grid-container align-items-center">
                                <div className="grid-item-centered">
                                    <img src={ordinary} height="43px" width="30px" alt="Ordinary"/>
                                    <p className='my-auto'>120</p>
                                </div>
                            </div>

                            <br/>
                            <div className="grid-container align-items-center">
                                <div className="grid-item-centered">
                                    <img src={general} height="43px" width="30px" alt="General"/>
                                    <p className='my-auto'>50</p>
                                </div>
                            </div>

                            <br />

                            <div className="grid-container align-items-center">
                                <div className="grid-item-centered">
                                    <img src={helmet} height="43px" width="30px" alt="Helmet"/>
                                    <p className='my-auto'>270</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='sectionGlass align-items-center'>
                            <p className='font-weight-bold'>Logros</p>
                            <div className="grid-item-centered align-items-center align-text-center">
                                <img src={trophy} height="35px" width="35px" alt="trophy"/>
                                <p className='my-auto'>2/6</p>
                            </div>
                            
                            <div className='spacer'/>

                            <p className='font-weight-bold'>Monedas</p>
                            <div className="grid-container align-items-center">
                                <div className="grid-item-centered">
                                    <img src={money} height="35px" width="35px" alt="Coins"/>
                                    <p className='my-auto'>1000</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        )
    }
}

export default UserView;