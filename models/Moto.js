const { Schema, model, models } = require("mongoose");


const MotoSchema = new Schema ({
    marca: {
        type: String,
        require: true
    },
    modelo: {
        type: String,
        require: true
    },
    cilindrada: {
        type: Number,
        require: true
    },
    placa: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    tipo: {
        type: String,
        require: true
    },
    cliente: {
        type: Schema.Types.ObjectId,
        ref: "Cliente",
        require: true
    }      
})
module.exports = model("Moto", MotoSchema)