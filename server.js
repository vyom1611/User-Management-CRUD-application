const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");

const connectDB = require('./server/database/connection');

const App = express();

dotenv.config({path:'config.env'});



//Log requests on console
App.use(morgan('tiny'));

//MongoDB connection
connectDB();

//Pass request to body-parser
App.use(bodyparser.urlencoded({extended:true}));

//Set view engine
App.set("view engine", "ejs");

//Load assets (using middleware)
App.use('/css', express.static(path.resolve(__dirname, "assets/css")));
App.use('/img', express.static(path.resolve(__dirname, "assets/img")));
App.use('/js', express.static(path.resolve(__dirname, "assets/js")));


//Load Routers
App.use('/', require('./server/routes/router'));


const PORT = process.env.PORT || 3000;

App.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});