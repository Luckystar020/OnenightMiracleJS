// Firebase App is always required and must be first
const firebase = require("firebase");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

// // Add additional services that you want to use
// var auth = require("firebase/auth");
// var db = require("firebase/database");

var config = {
    apiKey: "AIzaSyBb9WUnsR9xzp_T8wK564-DuxW3w4YHP6Q",
    authDomain: "example-6b911.firebaseapp.com",
    databaseURL: "https://example-6b911.firebaseio.com",
    projectId: "example-6b911",
    storageBucket: "example-6b911.appspot.com",
    messagingSenderId: "541906244701"
}

firebase.initializeApp(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/add',function(req,res){
    
    let userId = req.body.id
    let name = req.body.name
    let email = req.body.email
    let imageUrl = req.body.imageUrl
    
    firebase.database().ref('user/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
    },function (error) {
        if (error) {
           console.log("error",error);
        }else{
           console.log("Successful");
        }
    });
    res.send(`Add ${req.body.name} Successful`);
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))