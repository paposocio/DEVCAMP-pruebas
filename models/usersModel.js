const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true,"Nombre obligatorio"],
        maxlength: [50,"Longitud maxima de 50"]
    },
    email:{
        type: String,
        required: [true,"Correo obligatorio"],
        unique:true
    },
    role:{
        type: String,
        required: [true,"Rol obligatorio"]
    },
    password:{
        type: String,
        required: [true,"Clave obligatoria"]
    },
    createdAt:Date
})

module.exports = mongoose.model('User', userSchema);