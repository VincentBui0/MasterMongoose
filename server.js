require("dotenv").config()
// --------------> allows the {.env} file
const express = require("express");
const app = express()
const PORT = process.env.PORT || 3000
const connectToDb = require("./connectToDb.js")
// This pulls our Mongoose connection into application
const cors = require("cors"); 
// ------------- Recieving reqs on cross-origins **
app.use(express.json())
// Express doesn"t naturally convert our data to json
app.use(cors())
connectToDb()
// This initializes our connectToDb() function
// ------------------------------------------------------reQs
const noteRoute = require('./routes/note')
const pokemonRoute = require('./routes/pokemon')
const jordanRoute = require('./routes/jordan')


app.get("/", (req, res) => {
    res.send("This is a Landing Page")
})

app.use('/notes', noteRoute)
//We want to establish CRUD routes for our Yugioh Model
app.use('/pokemon', pokemonRoute)
//We want to establish CRUD routes for our Nike Model
app.use('/jordan', jordanRoute)


app.listen(PORT, ()=>{
    console.log(`Express Server Listending on port num: ${PORT}`)
});
