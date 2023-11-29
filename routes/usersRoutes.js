const express = require("express");
const User = require("../models/usersModel");
const mongoose = require("mongoose");
const usersModel = require("../models/usersModel");

//definimos el ruteador de los user
const router = express.Router();

//crear user
router.post("/register", async (request, response) => {
  try {
    //guardar user que viene de body
    const user = await User.create(request.body);

    response.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      msg: error.message,
    });
  }
});

  //login user
  router.post("/login", async (request, response) => {
    try {
      const { email, password } = request.body;
      const user = await usersModel.findOne({ email });
      console.log(user);

      if (!user) {
        response.status(401).json({
          success: false,
          msg: "no existe el user",
        });
      } else {
        const isMatch = await user.comapararPassword(password);
        if (!isMatch) {
          response.status(401).json({
            success: false,
            msg: "credenciales invalidas",
          });
        } else {
          response.status(200).json({
            success: true,
            msg: "logueado correctamente",
          });
        }
      }
    } catch (error) {
      response.status(500).json({
        success: false,
        data: `Error encontrado: ${error.message}`,
      });
    }
  });

module.exports = router;
