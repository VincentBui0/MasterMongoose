const Jordan = require('../models/jordan')
const fetchAllJordans = async(req, res)=>{  
    const jordans = await Jordan.find();
    // ------------------------(1)
    res.json({jordans:jordans})
    // ------------------------(2)
}

const fetchJordan = async(req, res)=>{ 

    const jordanId = req.params.id
    // ------------------------(1)
    const jordan = await Jordan.findById(jordanId);
    // ------------------------(2)
    res.json({ jordan: jordan })
    // ------------------------(3)
}

const createJordan = async(req, res) => {  
console.log(`BODY: ${req.body}`)

const model = req.body.model
const sub_Model = req.body.sub_Model
const release_Year = req.body.release_Year

const jordan = await Jordan.create({
    model: model,
    sub_Model: sub_Model,     
    release_Year: release_Year,
});
    console.log(jordan)
    // ------------------------(2)
res.json({jordan: jordan});
    // ------------------------(3)
}

const updateJordan =  async(req, res) => {  
    const jordanId = req.params.id
        // ------------------------^(1)
    const {model, sub_Model, release_Year} = req.body
        // ------------------------^(2)
    const jordan = await Jordan.findByIdAndUpdate(jordanId, {
        model: model,
        sub_Model: sub_Model,
        release_Year: release_Year,
    });
    const updatedJordan = await Jordan.findById(jordanId);
    res.json({ jordan: updatedJordan });
        // ------------------------^(3)
        // ------------------------^(4)
}

const deleteJordan = async(req, res) => { //DELETE
    // 1. Get the id off the url
    // 2. Delete the record
    // 3. Send Response
    const jordanId = req.params.id
    // ------------------------^(1)
    const cardDelete = await Jordan.findByIdAndDelete(jordanId)
    // ------------------------^(2)
    res.json({success: "Record has been deleted successfully" })
    // ------------------------^(3)
}


module.exports = {
    fetchAllJordans,
    fetchJordan,
    createJordan,
    updateJordan,
    deleteJordan
}