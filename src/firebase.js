import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBzn3au0HK3c0ZoXpiruPePonvVs0O7z1Q",
    authDomain: "nba-full-c2980.firebaseapp.com",
    databaseURL: "https://nba-full-c2980.firebaseio.com",
    projectId: "nba-full-c2980",
    storageBucket: "nba-full-c2980.appspot.com",
    messagingSenderId: "43081876064",
    appId: "1:43081876064:web:dfbdb7f84377d224"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebasseVideos = firebaseDB.ref('videos');

const firebaseLooper = () => {
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id:childSnapshot.key
        })
    });
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebasseVideos,
    firebaseTeams,
    firebaseLooper
}