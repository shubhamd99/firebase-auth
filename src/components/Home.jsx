import React, { Component } from 'react';
import fire from '../config/firebase';
import './Home.css';

class Home extends Component {

    constructor(props) {
       super(props)
      this.logout = this.logout.bind(this);
    }

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            <div className="container-cover">
               <div><h1>Welcome</h1></div>
               <div>
                 <button onClick={this.logout} className="btn btn-info btn-lg">Logout</button>
               </div>
            </div>
        );
 }
}

export default Home;
