import React, { Component } from 'react';
import NavBar from '../components/navbar.js';
import ProfilePlaceholder from '../assets/UserView/ProfilePlaceholder.png';  //background.jpg; ProfilePlaceholder.png;
import Progressbar from '../components/progressbar.js';
import {useNavigate} from "react-router-dom";


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
            <section class = "container centered display-block">
                <div className = "row mb-4 mt-4 ml-1 mr-1 align-items-center">

                    <div className='col-0 col-md-1'/>
                    <div className="col-12 col-md-4">
                        <img className="circularMask col-12" src={ProfilePlaceholder} alt="Profile" />
                        <h1>Nombre de Usuario</h1>
                        <p>Ataque?</p>
                        <Progressbar className="progressBar" mainColor="rgb(208,11,34)" bgColor = "rgb(0, 64, 128)" progress='10'  height={30} w = {100} />
                        <p>Defensa?</p>
                        <Progressbar className="progressBar"  mainColor="rgb(208,11,34)" bgColor = "rgb(0, 64, 128)"  progress='50'  height={30} w = {100} />
                    </div>

                    <div className='col-0 col-md-2'/>

                    <div className='col-12 col-md-4 align-items-center'>
                        <div>
                            <p>Logo1</p>
                            <p>Logo2</p>
                            <p>Logo3</p>
                        </div>
                        <div className='sectionGlass'>
                            <p >Logros ?/100</p>
                            <p>Monedas </p>
                            <Progressbar className="progressBar" mainColor="orange"  bgColor = "rgb(0, 64, 128)" progress='60'  height={30} w = {100} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
        )
    }
}

export default UserView;