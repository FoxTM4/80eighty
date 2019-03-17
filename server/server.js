require('dotenv').config();
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const axios = require('axios')
const massive = require('massive')
const AuthController = require("./controllers/AdminController");
const AdminController = require("./controllers/AdminController");

const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(bodyParser.json())

app.use( express.static( `${__dirname}/../build` ) );

const {
    SERVER_PORT,
    CONNECTION_STRING,
} = process.env;


//auth endpoints
app.post('/auth/signup', AuthController.userSignup)

app.post('/auth/adminlogin', AuthController.adminLogin)

app.post('/auth/userlogin', AuthController.userLogin)
//admin endpoints

//user endpoints






massive(CONNECTION_STRING).then(db => app.set('db', db));
console.log(`db has docked!`)

app.listen(SERVER_PORT, () => (console.log(`server listening on port ${SERVER_PORT}`)))