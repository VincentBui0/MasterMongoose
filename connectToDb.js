// Responsible for connecting the Mongoose DB to the Express Server Application
require("dotenv").config()

const mongoose = require('mongoose')

const connectToDb = async() => { 
  await mongoose.connect("mongodb+srv://admin:mdb90ADC@cluster0.hxfvrck.mongodb.net/");
// -> This is how the app connects to our database
    console.log("Currently Connected to MongoDB Cluster")
}
module.exports = connectToDb