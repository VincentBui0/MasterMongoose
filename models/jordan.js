const mongoose = require('mongoose');
const jordanSchema = new mongoose.Schema({
    model: String,
    sub_Model: String,
    release_Year: String,
})
const Jordan = mongoose.model("Jordan", jordanSchema);

module.exports = Jordan;