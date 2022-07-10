const axios = require("axios");
const path = require("path");
const express = require("express");
const app = express();

exports.homeRoutes = (req,res) => {
    //Make a get request to api
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            console.log(response.data)
            res.render('index', {users: response.data})
        })
        .catch(err => res.send(err))

    res.render('index', {users: "New Data"});
}

exports.add_user = (req,res) => {
    res.render('add_user');
}

exports.update_user = (req,res) => {
    res.render('update_user');
}