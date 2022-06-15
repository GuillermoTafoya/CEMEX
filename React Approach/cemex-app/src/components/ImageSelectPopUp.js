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
                        <div className="flex-container--img-popup popUp--images row">
                            {this.state.images.map((image, index) => <Img key={index} src={image} fun = {this.state.updateIsActive} alt=""/>)}
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
            fun: this.props.fun,
        }
        this.setUserImg = this.setUserImg.bind(this);
    }
    componentDidMount() {
        this.setState({
            isSelected: this.props.isActive,
        })
    }
    async setUserImg () {

        const user = JSON.parse(sessionStorage.getItem('userData'));
        //console.log("user:",user);
        const data = {
            username: user.username,
            img: this.props.src,
        }

        //console.log("data",data);
        //console.log("stringified:",JSON.stringify(data));

        const opciones = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(data),
            }
    
        // Envía req
        const response = await fetch("http://localhost:5000/updateImg", opciones);
        
        //console.log("response: ",response);


        //Close popUp
        this.state.fun();

    }

    render() {
        return (
            <div className={` ${this.state.isSelected ? 'popUp--image-is-selected' : 'popUp--image-is-unselected'} centered popUpCircularMask`}>
                <img className = "popUp-image" src={this.props.src} onClick={this.setUserImg} alt=""/>
            </div>
        )
    }
}

export default ImageSelectPopUp;
