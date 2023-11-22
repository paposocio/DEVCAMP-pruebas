const mongoose = require("mongoose");

const CouseSchema = mongoose.Schema({
  title: {
    type:String,
    required: [true,"Titulo obligatorio"],
    maxlength: [50,"Longitud maxima de 50"]
  },
  description:{
    type: String,
    required:[true,"Descripcion obligatoria"]
  },
  weeks:{
    type:Number,
    required:[true,"Duracion obligatoria"]
  },
  enrollCost:{
    type:Number,
    required:[true,"Matricula obligatoria"]
  },
  minimumSkill:{
    type:String,
    enum: ["Beginner","Intermediate","Advanced","Expert"],
    required:[true,"Nivel obligatorio"]
  },
  createdAt:Date
});
module.exports = mongoose.model('Course', CouseSchema);