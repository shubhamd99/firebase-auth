import React, { Component } from 'react';
import './App.css';
import fire from './config/firebase';

import Login from './components/Login';
import Home from './components/Home';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       user: {},
    }
  }

  // email - test@gmail.com
  // pass - test1234

  componentDidMount() {
    this.authListner();
  }  

  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  }

  render() {
    return(
      <div>
        {this.state.user ? (<Home/>) : (<Login />)}
      </div>
    )
  }
}

export default App;
