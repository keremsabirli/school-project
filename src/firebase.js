import firebase from 'firebase';
import 'firebase/auth';
const app = firebase.initializeApp({
    apiKey: "AIzaSyBCBqgGaopzvJfueeZ-cbkdupaTy8IWixA",
    authDomain: "school-project-firebase.firebaseapp.com",
    databaseURL: "https://school-project-firebase.firebaseio.com",
    projectId: "school-project-firebase",
    storageBucket: "school-project-firebase.appspot.com",
    messagingSenderId: "100782171682",
    appId: "1:100782171682:web:2c8954100951d1a14acc7b"
  });
export default app;