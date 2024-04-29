// Schema: we create a blueprint for the model so we can export that 
// format to our express server and eventually link it to your routes {CRUD operations}.

const mongoose = require('mongoose');
const pokemonSchema = new mongoose.Schema({
    name: String,
    type: String,
    
})
const Yugioh = mongoose.model("Pokemon", pokemonSchema);

module.exports = Yugioh;