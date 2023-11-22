const mongoose = require('mongoose')

const BootcampSchema = mongoose.Schema({
    name:{
     type: String,
     required: [true,"Nombre obligatorio"],
     unique:true,
     maxlength: [50,"Longitud maxima de 50"]
    },
    phone:{
        type:Number,
        maxlength: [10,"Longitud maxima de 10"]
    },
    address:{
        type:String,
        maxlength: [10,"Longitud maxima de 100"],
        required: [true,"Direccion obligatoria"]
    },
    topics:{
        type:String,
        required: [true,"Tema obligatorio"],
        enum: ["Frontend","Backend","IA","Devops"]
    },
    averageRating:Number,
    createdAt:Date
})

module.exports = mongoose.model('Bootcamp', BootcampSchema);
