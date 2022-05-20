import React, { Component } from 'react';
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
            <h1 className = "Example" >NavBar aqui</h1>
            <section class = "display-block">
                <div>Gráfica 1</div>
                <div>Gráfica 2</div>
            </section>
        </div>
        
        )
    }
}

export default StatisticsView;