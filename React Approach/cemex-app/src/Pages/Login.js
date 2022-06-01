import React, { Component } from 'react';

import '../Pages/Login.scss';

class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            mode: this.props.mode
        }
        
    }
    componentDidMount() {
        document.title = 'Login'
    }

    toggleMode() {
        var newMode = this.state.mode === 'login' ? 'signup' : 'login';
        this.setState({ mode: newMode});
    }
    
    render() {
        return (
            //// MISSING ONE CLICK SOCIAL VALIDATION ////
            // GOOGLE AND FACEBOOK
            // CHANGE CHECK-IN WITH A TEXT BUTTON -> MORE INTUITIVE
            // ALSO MISSING RESPONSIVENESS
            <div className = "app--is-login">
                <div className={`form-block-wrapper form-block-wrapper--is-${this.state.mode}`} ></div>
                    <section className={` form-block form-block--is-${this.state.mode}`}>
                        <header className="form-block__header">
                            <h1>{this.state.mode === 'login' ? 'Bienvenido!' : 'Registrarse'}</h1>
                            <div className="form-block__toggle-block">
                                <span>{this.state.mode === 'login' ? 'Aún no' : 'Ya'} tienes una cuenta?</span>
                                <div className = "form-toggler" id="form-toggler" onClick={this.toggleMode.bind(this)}>{this.state.mode === 'login' ? 'Crear Una' : 'Iniciar Sesión'} </div>
                                {/* <input id="form-toggler" type="checkbox" onClick={this.toggleMode.bind(this)} />
                                <label htmlFor="form-toggler"></label> */}
                            </div>
                        </header>
                        <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} />
                    </section>
            </div>
        )
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <form onSubmit={this.props.onSubmit}>
            <div className=" form-block__input-wrapper ">

                <div className="form-group form-group--login">

                    <Input  type="email" id="username" label="email" disabled={this.props.mode === 'signup'}/>
                    <Input  type="password" id="password" label="contraseña" disabled={this.props.mode === 'signup'}/>

                </div>

                <div className="form-group form-group--signup">


                        <Input type="text" id="fullname" label="nombre completo" disabled={this.props.mode === 'login'} />
                        
                        <Input  type="email" id="email" label="email" disabled={this.props.mode === 'login'} />

                        <input  className="form-group__input" type="text" 
                        placeholder="fecha de nacimiento" 
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} 
                        id="birthday" 
                        disabled={this.props.mode === 'login'} />

                        <Input  type="password" id="createpassword" label="contraseña" disabled={this.props.mode === 'login'} />
                        <Input  type="password" id="repeatpassword" label="repetir contraseña" disabled={this.props.mode === 'login'} />
                    

                </div>
            </div>

            <button className="button button--primary full-width" type="submit">{this.props.mode === 'login' ? 'Iniciar Sesión' : 'Registrarse'}</button>
        </form>
        )
    }
}

const Input = ({ id, type, label, disabled }) => (
    <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
);

export default LoginView;