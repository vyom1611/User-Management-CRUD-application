var userDB = require('../model/model.js');

// Create and save new User (API)
exports.create = (req,res) => {
    // Validate request
    if(!req.body){
        res.status(400).send({message: 'Content is empty!'});
        return;
    }

    //New User instance following schema
    const user = new userDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    //Saving user data to database
    user
        .save(user)  //saving to MongoDB
        .then(data => res.send(data))
        .catch(err => res.status(500, {message: err.message || "Some error occurred while creating user"}))

}

// Retrieve all users and return a single User (API)
exports.find = (req,res) => {
    userDB.find()
        .then(user => res.send(user))
        .catch(err => res.send(500).send({message: "Error while finding user information" || err.message}))
}

// Update a new user by an id (API)
exports.update = (req,res) => {
    if(!req.body){
        res.status(400).send({message: 'Content is empty!'});
        return;
    }

    const id = req.params.id;
    userDB.findByIdAndUpdate(id, req.body)
        .then(data => { 
            if (!data) {
            res.status(400).send({ message: "User ID not found or invalid" })
        } else {
            res.send(data)
        }
    })
        .catch(err => res.status(500).send({message:"Error, user information not found"}))

    
}

// Delete a user with user id (API)
exports.delete = (req,res) => {
    if(!req.body){
        res.status(400).send({message: 'Content is empty!'});
        return;
    }

    const id = req.params.id;
    userDB.findByIdAndDelete(id, req.body)
        .then(data => { 
            if (!data) {
            res.status(400).send({ message: "User ID not found or invalid" })
        } else {
            res.send({message: "User deleted succesfully"})
        }
    })
        .catch(err => res.status(500).send({message:"Error, user information not found"}))

    
    
}