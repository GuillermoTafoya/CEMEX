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
                            <h1>{this.state.mode === 'login' ? '¡Bienvenido!' : 'Registrarse'}</h1>
                            <div className="form-block__toggle-block">
                                <span>{this.state.mode === 'login' ? '¿Aún no' : '¿Ya'} tienes una cuenta?</span>
                                <div className = "form-toggler" id="form-toggler" onClick={this.toggleMode.bind(this)}>{this.state.mode === 'login' ? 'Crear Una' : 'Iniciar Sesión'} </div>

                            </div>
                        </header>
                        <LoginForm mode={this.state.mode} onSubmit={this.props.onSubmit} onChange={this.props.handleChange} />
                    </section>
            </div>
        )
    }
}


const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
};

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
            errors: {
             username: '',
              email: '',
              password: '',
            }
        }
    }   
    
    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;
      switch (name) {
      case 'username': 
        errors.username = 
          value.length < 5
            ? 'Username must be at least 5 characters long!'
            : 'aa';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? 'aa'
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be at least 8 characters long!'
            : 'aa';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
    render() {
        const {errors} = this.state;

        return (
        <form onSubmit={this.props.onSubmit && this.props.handleSubmit} onChange={this.props.handleChange} method={this.props.mode === 'login' ? 'LOGIN' : 'SIGNUP'}>
            <div className=" form-block__input-wrapper ">

                <div className="form-group form-group--login">

                    <Input  type="email" id="usernameLogin" label="email" disabled={this.props.mode === 'signup'}/>
                    <Input  type="password" id="passwordLogin" label="contraseña" disabled={this.props.mode === 'signup'}/>

                </div>

                <div className="form-group form-group--signup">


                        <Input type="text" id="usernameRegister" label="nombre de usuario" onChange={this.props.handleChange} noValidate disabled={this.props.mode === 'login'} />
                        hola mundo
                        {errors.username.length > 0 && 
                          <div className='error'>{errors.username}</div>}

                        <Input  type="email" id="email" label="email" onChange={this.props.handleChange} disabled={this.props.mode === 'login'} />
                        {errors.email.length > 0 && 
                          <div className='error'>{errors.email}</div>}

                        <input  className="form-group__input" type="text" 
                        placeholder="fecha de nacimiento" 
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")} 
                        id="birthday" 
                        disabled={this.props.mode === 'login'} />

                        <Input  type="password" id="createPassword" label="contraseña" onChange={this.props.handleChange} noValidate disabled={this.props.mode === 'login'} />
                        {errors.password.length > 0 && 
                        <div className='error'>{errors.password}</div>}

                        <Input  type="password" id="repeatPassword" label="repetir contraseña" disabled={this.props.mode === 'login'} />
                        {errors.password.length > 0 && 
                        <span className='error'>{errors.password}</span>}
                    

                </div>
            </div>
            <button className="loginButton--primary full-width" type="submit">{this.props.mode === 'login' ? 'Iniciar Sesión' : 'Registrarse'}</button>
            
        </form>
        
        )
    }
}

const Input = ({ id, type, label, onChange, disabled }) => (
    <input className="form-group__input" type={type} id={id} onChange={onChange} placeholder={label} disabled={disabled}/>
);



export default LoginView;
