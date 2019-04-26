import firebase from "firebase/app";
import "firebase/auth";


const config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "durable-jet-230615.firebaseapp.com",
    databaseURL: "https://durable-jet-230615.firebaseio.com",
    projectId: "durable-jet-230615",
    storageBucket: "durable-jet-230615.appspot.com",
    messagingSenderId: "481330006243"
  };
const fire = firebase.initializeApp(config);

export default fire;
