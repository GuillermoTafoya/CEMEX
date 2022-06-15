import React, { Component} from 'react';

class PopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        }
    }
    componentDidMount() {
        this.setState({
            isActive: this.props.isActive,
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.isActive !== this.props.isActive) {
            this.setState({
                isActive: this.props.isActive,
            })
        }
    }
    render() {
        return (
            <div className={`${this.state.isActive ? 'popUp--is-active' : 'popUp--is-inactive'}`}>
                {this.state.isActive &&
                <div className="popUp--container">
                    <div className="popUp--content">
                        <div className="popUp--title">
                            {this.props.title}
                        </div>
                        <div className="popUp--text">
                            {this.props.text}
                        </div>
                        <div className="popUp--buttons">
                            {this.props.buttons.map((button, index) => <button key={index} className={`${button.className}`} onClick={button.onClick}>{button.text}</button>)}
                        </div>
                    </div>
                </div>}
            </div>
        )
    }
}

export default PopUp;
