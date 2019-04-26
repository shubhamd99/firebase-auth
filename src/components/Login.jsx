import React, { Component } from 'react';
import './Login.css';
import fire from '../config/firebase';

class Login extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         email: '',
         password: '',
         error: null
      }
      this.handlChange = this.handlChange.bind(this);
      this.login = this.login.bind(this);
      this.signUp = this.signUp.bind(this);
    }

    handlChange = (e) => {
        this.setState({
            [e.target.type]: e.target.value
        })
    }
    
    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {

        }).catch((err) => {
            console.log(err)
            this.setState({ error: err.message })
        })
    }

    signUp = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((err) => {
            console.log(err)
            this.setState({ error: err.message })
        })
    }

    render() {
        return (
            <div className="container-login">
                <div className="row">
                    <div className="col-6 bg-cover">
                       
                    </div>
                    <div className="col-6 side-login">
                        <form className="login-box">
                        <div className={(this.state.error ? 'error-msg' : null)}>{this.state.error}</div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input value={this.state.email} onChange={this.handlChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required={true}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input value={this.state.password} onChange={this.handlChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required={true}/>
                        </div>
                        <button onClick={this.login} type="submit" className="btn btn-info">Login</button>
                        <button onClick={this.signUp} className="btn btn-success btnside">Signup</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;