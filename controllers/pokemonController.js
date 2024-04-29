const Pokemon = require('../models/pokemon')
const catchAll = async(req, res)=>{  
    const pokemonCards = await Pokemon.find();

    res.json({pokemonCards: pokemonCards})
    // ------------------------(2)
}

const find = async(req, res)=>{  

    const pokemonId = req.params.id

    const pokemon = await Pokemon.findById(pokemonId);
    res.json({ pokemon:pokemon })

}

const create = async(req, res) => {  
console.log(`BODY: ${req.body}`)

const name = req.body.name
const type = req.body.type

const pokemon = await Pokemon.create({
    name: name,
    type: type,
});
    console.log(pokemon)
    // ------------------------(2)
res.json({pokemon:pokemon});
    // ------------------------(3)
}

const update =  async(req, res) => { 
    const pokemonId = req.params.id
        // ------------------------^(1)
    const {name, type} = req.body
        // ------------------------^(2)
    const pokemon = await Pokemon.findByIdAndUpdate(pokemonId, {
        name: name,
        type: type,
    });
    const updated = await Pokemon.findById(pokemonId);
    res.json({ pokemon: updated });
        // ------------------------^(3)
        // ------------------------^(4)
}

const deleteEntry = async(req, res) => { 
    const pokemonId = req.params.id
    // ------------------------^(1)
    const Delete = await Pokemon.findByIdAndDelete(pokemonId)
    // ------------------------^(2)
    res.json({success: "Record has been deleted successfully" })
    // ------------------------^(3)
}


module.exports = {
    catchAll,
    find,
    create,
    update,
    deleteEntry
}