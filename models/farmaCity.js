const mongoose = require("mongoose")

const Schema = mongoose.Schema

const schema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    nacionalidad:{
        type: String,
        required: true
    },
    dni:{
        type: Number,
        required: true
    },
    medicamento:{
        type:String,
        required: true
    },
    cantidad:{
        type: Number,
        required: true
    },
    obraSocial:{
        type: Boolean,
        required: true
    },
    obraSocialNombre:{
        type: String
    }


})

const FarmaCity = mongoose.model("FarmaCity", schema)

module.exports = {FarmaCity}