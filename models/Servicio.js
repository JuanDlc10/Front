const { Schema, model, models } = require("mongoose");

const ServicioSchema = new Schema ({
    fecha: {
        type: String,
        require: true
    },
    anticipo: {
        type: String,
        require: true
    },
    kilometraje: {
        type: String,
        require: true
    },
    combustible: {
        type: String,
        require: true
    },
    concepto: {
        type: String,
        require: true
    },
    presupuesto: {
        type: String,
        require: true
    },
    observaciones: {
        type: String,
        require: true
    },
    proximo: {
        type: String,
        require: true
    },
    moto: {
            type: Schema.Types.ObjectId,
            ref: "Moto",
            require: true
        }   
})
module.exports = model("Servicio", ServicioSchema)