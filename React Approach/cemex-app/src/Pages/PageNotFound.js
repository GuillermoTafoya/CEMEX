import React, { Component } from 'react';

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
            <h1 className = "Example" >ESTA PÁGINA NO EXISTE</h1>
        </div>
        
        )
    }
}

export default PageNotFound;