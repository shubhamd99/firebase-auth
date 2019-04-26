import firebase from "firebase/app";
import "firebase/auth";


const config = {
    apiKey: "AIzaSyA9N3vgipRQV9NmOXpoPqa701i52f0-Pp0",
    authDomain: "durable-jet-230615.firebaseapp.com",
    databaseURL: "https://durable-jet-230615.firebaseio.com",
    projectId: "durable-jet-230615",
    storageBucket: "durable-jet-230615.appspot.com",
    messagingSenderId: "481330006243"
  };
const fire = firebase.initializeApp(config);

export default fire;