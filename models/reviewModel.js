const mongoose = require('mongoose')

const ReviewSchema=mongoose.Schema({
    title:{
        type:String,
        required:[true,"titulo obligatorio"]
    },
    comment:{
        type:String,
        required:[true,"Comentario obligatorio"]
    },
    rating:{
        type:Number,
        required:[true,""]
    },
    createdAt:Date
})