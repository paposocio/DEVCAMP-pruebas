const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nombre obligatorio"],
    maxlength: [50, "Longitud maxima de 50"],
  },
  email: {
    type: String,
    required: [true, "Correo obligatorio"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Clave obligatoria"],
  },
  role: {
    type: String,
    enum: ["user", "admin", "publisher"],
    required: [true, "Rol obligatorio"],
  },
});

userSchema.pre("save", async function () {
  //generar sal
  const sal = await bcryptjs.genSalt(10);
  //encriptar la contraseña usando la
  this.password = await bcryptjs.hash(this.password, sal);
});
userSchema.methods.comapararPassword = async function (password) {
  return await bcryptjs.compare(password,this.password)
};
module.exports = mongoose.model("User", userSchema);
