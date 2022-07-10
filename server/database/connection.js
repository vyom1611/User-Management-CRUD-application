// CREATING mongoDB connection with atlas Database
const dotenv = require("dotenv");
dotenv.config({path:'../../../config.env'});

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        //connection string
        const connection = await mongoose.connect(process.env.MONGO_URI, {
            // Stopping unwanted warnings in console
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected on this port`)
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;