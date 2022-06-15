import React, { Component} from 'react';
import "../components/ImageSelectPopUp.scss";


class ImageSelectPopUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: this.props.isActive,
            images: this.props.images,
            updateIsActive : this.props.updateIsActive,
            
        }
    }
    
    componentDidUpdate(prevProps) {
        console.log("updated");
        if (prevProps.isActive !== this.props.isActive) {
            this.setState({
                isActive: !this.props.isActive,
            })
        }
    }

    render() {
        return (
            
            <div>
                {this.state.isActive &&
                <section className=" popUpGlass col-12 col-12 col-md-7 centered ">
                    <div className="popUp--content">
                        <div className="popUp--title">
                            Selecciona una imagen
                        </div>
                        <div className="flex-container--img-popup popUp--images">
                            {this.state.images.map((image, index) => <Img key={index} src={image} alt=""/>)}
                        </div>
                        <button className="button button--primary popUp--button" onClick={this.state.updateIsActive}> Cerrar </button>
                    </div>
                    
                </section>}
            </div>
        )
    }
}


class Img extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        }
    }
    componentDidMount() {
        this.setState({
            isSelected: this.props.isActive,
        })
    }
    render() {
        return (
            <div className={` ${this.state.isSelected ? 'popUp--image-is-selected' : 'popUp--image-is-unselected'} centered popUpCircularMask`}>
                <img className = "popUp-image" src={this.props.src} alt=""/>
            </div>
        )
    }
}

export default ImageSelectPopUp;
