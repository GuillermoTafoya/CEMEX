import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

import '../Pages/UserView.scss';

import ProfilePlaceholder from '../assets/UserView/panda.png';  //background.jpg; ProfilePlaceholder.png;
import sword from '../assets/UserView/sword.png';
import shield from '../assets/UserView/shield.png';
import money from '../assets/UserView/money.png';
import arrow from '../assets/UserView/arrow.png';
import snowflake from '../assets/UserView/snowflake.png';
import waterdrop from '../assets/UserView/waterdrop.png';
import trophy from '../assets/UserView/trophy.png';
import ordinary from '../assets/UserView/ordinary.png';
import general from '../assets/UserView/general.png';
import helmet from '../assets/UserView/helmet.png';
import ach2 from '../assets/UserView/ach2.png';
import ach3 from '../assets/UserView/ach3.png';
import ach4 from '../assets/UserView/ach4.png';
import ach5 from '../assets/UserView/ach5.png';
import ach6 from '../assets/UserView/ach6.png';

import Progressbar from '../components/progressbar.js';


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
                            <img className="bulletLogo" src={sword} height="35px" width="35px" />
                            <Progressbar className="progressBar" mainColor="rgba(208,11,34,1)" bgColor = "rgba(0, 64, 128,0.5)" progress='20 wins'  height={30} w = {90} />
                        </div>
                    </div>

                    <div className='col-0 col-md-2'/>

                    <div className='col-12 col-md-4 '>
                        <div className="sectionGlass align-items-center">
                            <p className='font-weight-bold'>Tropas</p>
                            <div className="grid-container align-items-center">
                                <img className="bulletLogo2" src={ordinary} height="auto" width="30px" />
                                <p className='my-auto'>120</p>
                            </div>
                            <br/>
                            <div className="grid-container align-items-center">
                                <img className="bulletLogo2" src={general} height="auto" width="30px" />
                                <p className='my-auto'>50</p>
                            </div>
                            <br />
                            <div className="grid-container align-items-center">
                                <img className="bulletLogo2" src={helmet} height="auto" width="30px" />
                                <p className='my-auto'>270</p>
                            </div>
                        </div>
                        
                        <div className='sectionGlass align-items-center'>
                            <p className='font-weight-bold'>Logros</p>
                            <div className="grid-container align-items-center align-text-center">
                                <img className="bulletLogo2" src={trophy} height="35px" width="35px" />
                                <p className='my-auto'>2/6</p>
                            </div>
                            
                            <div className='spacer'/>

                            <p className='font-weight-bold'>Monedas</p>
                            <div className="grid-container align-items-center">
                                <img className="bulletLogo" src={money} height="35px" width="35px" />
                                <Progressbar className="progressBar" mainColor="orange"  bgColor = "rgba(0, 64, 128,0.5)" progress='1000'  height={30} w = {90} />
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