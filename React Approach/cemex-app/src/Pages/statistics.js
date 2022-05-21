import React, { Component } from 'react';
import NavBar from '../components/navbar.js';


//// GRAPH JS ////
class StatisticsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            test: this.props.test
        }
    }
    componentDidMount() {
        document.title = 'Estadísticas'
    }
    render() {
        return(

        <div className = "app--is-not-login">
            <NavBar />
            <section class = "display-block">
                <div>Gráfica 1</div>
                <div>Gráfica 2</div>
            </section>
        </div>
        
        )
    }
}

export default StatisticsView;