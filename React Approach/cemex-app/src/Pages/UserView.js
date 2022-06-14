import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

import '../Pages/UserView.scss';

//import ProfilePlaceholder from '../assets/UserView/panda.png';  //background.jpg; ProfilePlaceholder.png;

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
            data: this.props.data
        }
    }

    componentDidMount() {
        document.title = 'Usuario'
        this.props.updateCurrentPage("usuario")
    }
    logout(){
        sessionStorage.setItem("loggedIn", false);
        window.location.reload(false);
    }
    render() {
        return(
        <div className = "app--is-not-login">
            <div className='spacer'/> <div className='spacer'/> 
            <section className = "container centered display-block justify-content-center">
                <div className = "row mb-4 mt-4 ml-1 mr-1 align-items-center">

                    <div className='col-0 col-md-1'/>
                        <div className="col-12 col-md-5">
                        <div className="sectionGlass">
                            <div className="col-12 circularMask">
                                <img src={this.state.data.img} alt="Profile" />
                            </div>
                            <h1 className='col-12 font-weight-bold userText'>{this.state.data.username}</h1>

                            <div className="grid-container align-items-center">
                                <div className="grid-item-centered">
                                    <img src={sword} height="35px" width="35px" />
                                    <p className='my-auto'>{this.state.data.wins ? this.state.data.wins  : 0} Wins</p>
                                </div>
                            </div>
                            

                        </div>
                        <div className="sectionGlass">
                                <p className='CAUTION'>LOGOUT</p>
                                <button className="button--CAUTION full-width" type="submit" onClick={this.logout}> LOGOUT </button>
                        </div>
                    </div>


                    <div className='col-12 col-md-5 '>
                        <div className="sectionGlass align-items-center">

                            <p className='font-weight-bold'>Tropas</p>

                            <div className="grid-container align-items-center">
                                <div className="grid-item-centered">
                                    <img src={ordinary} height="43px" width="30px" />
                                    <p className='my-auto'>{this.state.data.ordinaryNum ? this.state.data.ordinaryNum : 0}</p>
                                </div>
                            </div>

                            <br/>
                            <div className="grid-container align-items-center">
                                <div className="grid-item-centered">
                                    <img src={general} height="43px" width="30px" />
                                    <p className='my-auto'>{this.state.data.generalNum ? this.state.data.generalNum : 0}</p>
                                </div>
                            </div>

                            <br />

                            <div className="grid-container align-items-center">
                                <div className="grid-item-centered">
                                    <img src={helmet} height="43px" width="30px" />
                                    <p className='my-auto'>{this.state.data.helmetNum ? this.state.data.helmetNum : 0}</p>
                                </div> 
                            </div>
                        </div>
                        
                        <div className='sectionGlass align-items-center'>
                            <p className='font-weight-bold'>Logros</p>
                            <div className="grid-item-centered align-items-center align-text-center">
                                <img src={trophy} height="35px" width="35px" />
                            <p className='my-auto'>{this.state.data.achievements.filter(x => x === true).length}/{this.state.data.achievements.length}</p>
                            </div>
                            
                            <div className='spacer'/>

                            <p className='font-weight-bold'>Monedas</p>
                            <div className="grid-container align-items-center">
                                <div className="grid-item-centered">
                                    <img src={money} height="35px" width="35px" />
                                    <p className='my-auto'>{this.state.data.coins ? this.state.data.coins : 0}</p>
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