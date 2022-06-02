import React, { Component } from 'react';
import NavBar from '../components/navbar.js';

import "./Achievements.scss";

import ach1 from '../assets/UserView/ach1.png';
import ach2 from '../assets/UserView/ach2.png';
import ach3 from '../assets/UserView/ach3.png';
import ach4 from '../assets/UserView/ach4.png';
import ach5 from '../assets/UserView/ach5.png';
import ach6 from '../assets/UserView/ach6.png';

class achv {
    constructor(name, img, description) {
        this.name = name;
        this.img = img;
        this.description = description;
    }

}

const achievements = [
                        new achv("Soldados 1",ach1,"Obtén al menos 100 soldados"), 
                        new achv("Soldados 2",ach2,"Obtén al menos 1000 soldados"), 
                        new achv("Armas 1",ach3,"Compra tu primer arma para tu ejército"), 
                        new achv("Batallas 1",ach4,"Gana tu primera batalla"), 
                        new achv("Batallas 2",ach5,"Gana tu tercera batalla"), 
                        new achv("Suerte",ach6,"Gana una batalla con al menos 1.5x de desventaja numérica en ejército")];


const Achievement = ({isActive,img}) => {
    return(
    <div className={`centeredAchievement achievementGlass--is-${isActive === 'true' ? 'active' : 'inactive' }`}>
        <img src={img} height="60px" width="84px" />
    </div>
    )
}

class AchievementsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            achievements: this.props.achievements
        }
        console.log(this.state.achievements);
        
    }
    componentDidMount() {
        document.title = 'Logros'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <NavBar />
            <div className='font-weight-bold placeholder-text'>Logros</div>
            <section className = "sectionGlass flex-container--achievements">
                { achievements.map((ach,index) => <Achievement key={index} isActive={this.state.achievements[index]} img={ach.img} />) }
            </section>
        </div>
        
        )
    }
}



export default AchievementsView;