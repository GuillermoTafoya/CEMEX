import React, { Component, useState } from 'react';
import NavBar from '../components/navbar.js';

import "./Achievements.scss";

import ach1 from '../assets/UserView/Ach1.png';
import ach2 from '../assets/UserView/Ach2.png';
import ach3 from '../assets/UserView/Ach3.png';
import ach4 from '../assets/UserView/Ach4.png';
import ach5 from '../assets/UserView/Ach5.png';
import ach6 from '../assets/UserView/Ach6.png';

class achv {
    constructor(name, img, description) {
        this.name = name;
        this.img = img;
        this.description = description;
    }

}

const achievements = [
                        new achv("Popular",ach1,"Obtuviste al menos 100 soldados."), 
                        new achv("Gran General",ach2,"Obtuviste al menos 1000 soldados."), 
                        new achv("Bélico",ach3,"Ganaste una batalla."), 
                        new achv("Salvaje",ach4,"Ganaste tu tercera batalla."), 
                        new achv("Estratega",ach5,"Compraste tu primer arma para tu ejército."), 
                        new achv("Suertudo",ach6,"Ganaste una batalla con al menos 1.5x de desventaja numérica en ejército")
                    ];




const Achievement = ({isActive,img,name,txt}) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return(
    
    <div className={`${isSelected ? 'achievementGrid-container col-12 order-1' : 'order-12' } align-items-center 
    centeredAchievement achievementGlass--is-${isActive === 'true' ? 'active' : 'inactive' }`} onClick={handleClick}>
        <div className="grid-item-centered">
            {isSelected && <div className='achievementText bold'> {name} </div> }
            <img className="centered" src={img} height="60px" width="84px" />
            {isSelected && <div className='achievementText'> {txt} </div> }
        </div>
    </div>
    )
}

class AchievementsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            achievements: this.props.achievements,
            selected: null
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
            
            <section className = "sectionGlass col-10 col-md-8 col-lg-6 centered">
                <div className='font-weight-bold placeholder-text centered'>Logros</div>
                <div className="flex-container--achievements">
                    { achievements.map((ach,index) => <Achievement key={index} isActive={index < this.state.achievements.length ? this.state.achievements[index] : "false"} img={ach.img} name={ach.name} txt={ach.description} />) }
                </div>
            </section>
        </div>
        
        )
    }
}



export default AchievementsView;